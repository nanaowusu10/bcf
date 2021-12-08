var wms_layers = [];

var format_DistrictsofGhana_0 = new ol.format.GeoJSON();
var features_DistrictsofGhana_0 = format_DistrictsofGhana_0.readFeatures(json_DistrictsofGhana_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictsofGhana_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictsofGhana_0.addFeatures(features_DistrictsofGhana_0);
var lyr_DistrictsofGhana_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistrictsofGhana_0, 
                style: style_DistrictsofGhana_0,
                interactive: true,
                title: '<img src="styles/legend/DistrictsofGhana_0.png" /> Districts of Ghana'
            });
var format_BCFGhana_1 = new ol.format.GeoJSON();
var features_BCFGhana_1 = format_BCFGhana_1.readFeatures(json_BCFGhana_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BCFGhana_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BCFGhana_1.addFeatures(features_BCFGhana_1);
var lyr_BCFGhana_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BCFGhana_1, 
                style: style_BCFGhana_1,
                interactive: true,
                title: '<img src="styles/legend/BCFGhana_1.png" /> BCF-Ghana'
            });

lyr_DistrictsofGhana_0.setVisible(true);lyr_BCFGhana_1.setVisible(true);
var layersList = [lyr_DistrictsofGhana_0,lyr_BCFGhana_1];
lyr_DistrictsofGhana_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_BCFGhana_1.set('fieldAliases', {'Project': 'Project', 'Station': 'Station', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_DistrictsofGhana_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_BCFGhana_1.set('fieldImages', {'Project': 'TextEdit', 'Station': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_DistrictsofGhana_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_BCFGhana_1.set('fieldLabels', {'Project': 'inline label', 'Station': 'header label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_BCFGhana_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});