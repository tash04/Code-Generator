function barcodeGen() {

    var data = document.querySelector('.input').value;

    JsBarcode('#barcode', data , {

        background : '#fff',

        lineColor: "#0D4C92",
        width: 2,
        height: 80,
        displayValue: false

    });

}
