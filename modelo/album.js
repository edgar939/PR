'use strict'

var mongoose=require("mongoose");
var Schema = mongoose.Schema

var EsquemaAlbum = Schema({
    titulo:String,
    descripcion:String,
    anio:String,
    imagen:String,
    artista:{type: Schema.ObjectID, ref: "Artista"}
});

module.exports = mongoose.model('Album', EsquemaAlbum);