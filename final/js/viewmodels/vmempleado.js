/**
 * Created by Jimmy Javier on 11/10/2014.
 */
(function(orfisApp){
    function EmpleadoViewModel(){
        var self=this;
        self.empleado=new orfisApp.Empleado(
            {
                nombre:'Jimmy Javier',
                apellidoPaterno:'Martínez',
                apellidoMaterno:'González',
                correoElectronico:'jmartinez@orfis.gob.mx',
                numeroPersonal:'666',
                antiguedad:2
            }
        );
    };
    ko.applyBindings(new EmpleadoViewModel());
    console.log("vmempleado.js inicializado...");
}(window.orfisApp));
