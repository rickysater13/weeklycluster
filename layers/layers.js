var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NewBadspotBorder_1 = new ol.format.GeoJSON();
var features_NewBadspotBorder_1 = format_NewBadspotBorder_1.readFeatures(json_NewBadspotBorder_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewBadspotBorder_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewBadspotBorder_1.addFeatures(features_NewBadspotBorder_1);
var lyr_NewBadspotBorder_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewBadspotBorder_1, 
                style: style_NewBadspotBorder_1,
                popuplayertitle: 'New Badspot Border',
                interactive: true,
                title: 'New Badspot Border'
            });
var format_SINR_2 = new ol.format.GeoJSON();
var features_SINR_2 = format_SINR_2.readFeatures(json_SINR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SINR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SINR_2.addFeatures(features_SINR_2);
var lyr_SINR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SINR_2, 
                style: style_SINR_2,
                popuplayertitle: 'SINR',
                interactive: true,
    title: 'SINR<br />\
    <img src="styles/legend/SINR_2_0.png" /> -20 to -5<br />\
    <img src="styles/legend/SINR_2_1.png" /> -5 to 0<br />\
    <img src="styles/legend/SINR_2_2.png" /> 0 to 10<br />\
    <img src="styles/legend/SINR_2_3.png" /> 10 to 50<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_NewBadspotBorder_1.setVisible(true);lyr_SINR_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NewBadspotBorder_1,lyr_SINR_2];
lyr_NewBadspotBorder_1.set('fieldAliases', {'Name': 'Name', 'BS_Type': 'BS_Type', 'BS_Type_IOH': 'BS_Type_IOH', 'BS_BM': 'BS_BM', 'Status_BS': 'Status_BS', 'Issue_Category': 'Issue_Category', 'Badspot_Kategori': 'Badspot_Kategori', 'RCI': 'RCI', 'RHI': 'RHI', });
lyr_SINR_2.set('fieldAliases', {'File Name': 'File Name', 'Time': 'Time', 'MS': 'MS', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Height(m)': 'Height(m)', 'LTE PCC Serving RSRP(dBm)': 'LTE PCC Serving RSRP(dBm)', 'LTE SCC1 Serving RSRP(dBm)': 'LTE SCC1 Serving RSRP(dBm)', 'LTE SCC2 Serving RSRP(dBm)': 'LTE SCC2 Serving RSRP(dBm)', 'LTE PCC Serving RSRQ(dB)': 'LTE PCC Serving RSRQ(dB)', 'LTE PCC Serving SINR(dB)': 'LTE PCC Serving SINR(dB)', 'LTE PCC Serving PCI': 'LTE PCC Serving PCI', 'LTE SCC1 Serving PCI': 'LTE SCC1 Serving PCI', 'LTE SCC2 Serving PCI': 'LTE SCC2 Serving PCI', 'LTE PCC Serving EARFCN': 'LTE PCC Serving EARFCN', 'LTE SCC1 Serving EARFCN': 'LTE SCC1 Serving EARFCN', 'LTE SCC2 Serving EARFCN': 'LTE SCC2 Serving EARFCN', 'LTE PCC DL RLC Throughput(kbps)': 'LTE PCC DL RLC Throughput(kbps)', 'LTE PCC UL RLC Throughput(kbps)': 'LTE PCC UL RLC Throughput(kbps)', 'RF Mode': 'RF Mode', 'LTE ECI(eNodeB ID/Cell ID)': 'LTE ECI(eNodeB ID/Cell ID)', });
lyr_NewBadspotBorder_1.set('fieldImages', {'Name': 'TextEdit', 'BS_Type': 'TextEdit', 'BS_Type_IOH': 'TextEdit', 'BS_BM': 'TextEdit', 'Status_BS': 'TextEdit', 'Issue_Category': 'TextEdit', 'Badspot_Kategori': 'TextEdit', 'RCI': 'TextEdit', 'RHI': 'TextEdit', });
lyr_SINR_2.set('fieldImages', {'File Name': 'TextEdit', 'Time': 'DateTime', 'MS': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Height(m)': 'TextEdit', 'LTE PCC Serving RSRP(dBm)': 'TextEdit', 'LTE SCC1 Serving RSRP(dBm)': 'TextEdit', 'LTE SCC2 Serving RSRP(dBm)': 'TextEdit', 'LTE PCC Serving RSRQ(dB)': 'TextEdit', 'LTE PCC Serving SINR(dB)': 'TextEdit', 'LTE PCC Serving PCI': 'Range', 'LTE SCC1 Serving PCI': 'Range', 'LTE SCC2 Serving PCI': 'Range', 'LTE PCC Serving EARFCN': 'Range', 'LTE SCC1 Serving EARFCN': 'Range', 'LTE SCC2 Serving EARFCN': 'Range', 'LTE PCC DL RLC Throughput(kbps)': 'TextEdit', 'LTE PCC UL RLC Throughput(kbps)': 'TextEdit', 'RF Mode': 'TextEdit', 'LTE ECI(eNodeB ID/Cell ID)': 'TextEdit', });
lyr_NewBadspotBorder_1.set('fieldLabels', {'Name': 'no label', 'BS_Type': 'no label', 'BS_Type_IOH': 'no label', 'BS_BM': 'no label', 'Status_BS': 'no label', 'Issue_Category': 'no label', 'Badspot_Kategori': 'no label', 'RCI': 'no label', 'RHI': 'no label', });
lyr_SINR_2.set('fieldLabels', {'File Name': 'no label', 'Time': 'no label', 'MS': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Height(m)': 'no label', 'LTE PCC Serving RSRP(dBm)': 'no label', 'LTE SCC1 Serving RSRP(dBm)': 'no label', 'LTE SCC2 Serving RSRP(dBm)': 'no label', 'LTE PCC Serving RSRQ(dB)': 'no label', 'LTE PCC Serving SINR(dB)': 'no label', 'LTE PCC Serving PCI': 'no label', 'LTE SCC1 Serving PCI': 'no label', 'LTE SCC2 Serving PCI': 'no label', 'LTE PCC Serving EARFCN': 'no label', 'LTE SCC1 Serving EARFCN': 'no label', 'LTE SCC2 Serving EARFCN': 'no label', 'LTE PCC DL RLC Throughput(kbps)': 'no label', 'LTE PCC UL RLC Throughput(kbps)': 'no label', 'RF Mode': 'no label', 'LTE ECI(eNodeB ID/Cell ID)': 'no label', });
lyr_SINR_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});