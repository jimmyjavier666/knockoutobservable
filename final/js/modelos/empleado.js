/**
 * Created by Jimmy Javier on 11/10/2014.
 */
(function(orfisApp){
    function Empleado(data){
        var self=this;
        self.nombre=ko.observable(data.nombre);
        self.apellidoPaterno=ko.observable(data.apellidoPaterno);
        self.apellidoMaterno=ko.observable(data.apellidoMaterno);
        self.correoElectronico=ko.observable(data.correoElectronico);
        self.numeroPersonal=ko.observable(data.numeroPersonal);
        self.antiguedad=ko.observable(data.antiguedad);
    };
    orfisApp.Empleado=Empleado;
    console.log("empleado.js inicializado...");
}(window.orfisApp));
