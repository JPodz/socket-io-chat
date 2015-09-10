requirejs.config({
    baseUrl: ".",
    optimize: 'none',
    shim: {
        "angular": {
            "exports": "angular"
        }
    },
    paths: {
        "angular": "../bower_components/angular/angular",
        "socket-io": "../bower_components/angular-socket-io/socket",
        "angular-local-storage": "../bower_components/angular-local-storage/dist/angular-local-storage",
        "angular-bootstrap": "../bower_components/angular-bootstrap/ui-bootstrap",
        "angular-bootstrap-tpls": "../bower_components/angular-bootstrap/ui-bootstrap-tpls"
    }
});