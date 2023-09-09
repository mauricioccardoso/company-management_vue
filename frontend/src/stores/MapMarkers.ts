import { defineStore } from 'pinia';

import { Icon, Style } from "ol/style";
import { Feature } from "ol";
import { Geometry, Point } from "ol/geom";
import { Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';
import Select from "ol/interaction/Select";
import { fromLonLat } from "ol/proj";

import MarkerIcon from '@/components/img/marker.svg';
import MarkerIconSecondary from '@/components/img/marker-secondary.svg';

export const useMapMarkersDataStore = defineStore('mapMarkersDataStore', () => {
    let configAlreadySet : boolean = false;

    // Markers Builds Configs
    const vectorSource : VectorSource<Geometry> = new VectorSource();
    const vectorLayer = new VectorLayer();
    const select : Select = new Select({
        style: function () {
            return setStyle(MarkerIconSecondary);
        },
    });

    // Styles
    const setStyle = (icon, size : number = 0.05) => {
        return new Style({
            image: new Icon({
                src: icon,
                scale: size
            }),
        });
    }

    const buildMarkers = ((companies, map) : void => {
        clear();

        if(!companies || !map) {
            return;
        }

        // Markers / Feature Build
        const features = companies.map((company) => {
            const feature : Feature<Point> = new Feature({
                geometry: new Point(fromLonLat([company.longitude, company.latitude])),
            });

            feature.setProperties(company);

            feature.setStyle(setStyle(MarkerIcon));

            return feature;
        })

        vectorSource.addFeatures(features);

        if(configAlreadySet) {
            return;
        }

        setMapConfig(map);
    })

    const setMapConfig = (map) : void => {
        vectorLayer.setSource(vectorSource);
        map.value.addInteraction(select);
        map.value.addLayer(vectorLayer);

        // Map Interaction
        map.value.on('pointermove', function (evt) : void {
            map.value.getTargetElement().style.cursor = map.value.hasFeatureAtPixel(evt.pixel) ? 'pointer' : '';
        });

        map.value.on('click', function (evt) : void {
            if(!map.value.hasFeatureAtPixel(evt.pixel)) {
                return;
            }

            const feature = map.value.forEachFeatureAtPixel(evt.pixel, function (feature) {
                return feature;
            });

            console.log(feature.values_, 'Make Card - Show Company Info');
        });

        configAlreadySet = true;
    }

    const clear = () : void => {
        vectorSource.refresh();
    }

    return { buildMarkers }
})