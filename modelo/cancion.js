'use strict'

var mongoose=require("mongoose");
var Schema = mongoose.Schema

var EsquemaCancion = Schema({
    numero:String,
    nombre:String,
    duracion:String,
    archivo:String,
    rol:String,
    imagen:String,
    album:{type: Schema.ObjectID, ref: "Album"}
});

module.exports = mongoose.model('Cancion', EsquemaCancion);