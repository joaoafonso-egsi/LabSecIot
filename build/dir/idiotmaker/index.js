let stepper = ""
document.addEventListener('DOMContentLoaded', function () {
    stepper = new Stepper(document.querySelector('.bs-stepper'), {
        linear: false
    })
}) 

let x = JSON.parse(`{
    "battery": [
    {
        "id": 1,
        "name": "Samsung INR 18650-25R Cell",
        "power": 9.0,
        "file": "battery/samsung_18650.jpg",
        "datasheet": "http://dalincom.ru/datasheet/SAMSUNG%20INR18650-25R.pdf",
        "price": 6.0,
        "brand": "Samsung"
    }
    ],
    "connectivity": [
    {
        "id": 1,
        "name": "sim800l",
        "power": 0.19,
        "file": "connectivity/sim800l.jpg",
        "datasheet": "https://img.filipeflop.com/files/download/Datasheet_SIM800L.pdf",
        "price": 5.0,
        "brand": "SIMCom",
        "connectivity": "2G"

    },
    {
        "id": 2,
        "name": "MKR GSM 1400",
        "power": 0.19,
        "file": "connectivity/mkr_gsm_1400.jpg",
        "datasheet": "https://pt.mouser.com/catalog/specsheets/Arduino_01172018_ABX00018.pdf",
        "price": 59.90,
        "brand": "Arduino MKR",
        "connectivity": "3G"
    },
    {
        "id": 3,
        "name": "MKR GSM 1300",
        "power": 0.19,
        "file": "connectivity/mkr_gsm_1300.jpg",
        "datasheet": "https://www.mouser.com/catalog/specsheets/Arduino_01172018_ABX00017.pdf",
        "price": 35.00,
        "brand": "Arduino MKR",
        "connectivity": "LoRa"
    },
    {
        "id": 4,
        "name": "ESP32",
        "power": 0.19,
        "file": "connectivity/esp32.jpg",
        "datasheet": "https://pt.mouser.com/datasheet/2/891/esp32-wrover-b_datasheet_en-1384674.pdf",
        "price": 4.54,
        "brand": "Espressif",
        "connectivity": "WiFi"
    }

    ],
    "sensor": [
    {
        "id": 1,
        "name": "Car Counter",
        "power": 0.425,
        "file": "sensor/car_counter.jpg",
        "datasheet": "https://cdn.sparkfun.com/assets/9/a/6/a/d/LIDAR_Lite_v3HP_Operation_Manual_and_Technical_Specifications.pdf",
        "price": 131.57,
        "brand": "Garmin",
        "measures": [
        "Number of vehicles per period",
        "Avarage speed of vehicles per period"
        ]
    },
    {
        "id": 2,
        "name": "CO2 Sensor",
        "power": 0.0627,
        "file": "sensor/co2_Sensor.jpg",
        "datasheet": "https://www.dfrobot.com/wiki/index.php/Gravity:_Analog_Infrared_CO2_Sensor_For_Arduino_SKU:_SEN0219",
        "price": 67.90,
        "brand": "Gravity",
        "measures": [
        "0 – 5000 ppm CO2 (carbon dioxide) level"
        ]
    },
    {
        "id": 3,
        "name": "Light Sensor",
        "power": 0.002,
        "file": "sensor/light_sensor.jpg",
        "datasheet": "https://www.adafruit.com/product/1980",
        "price": 7.90,
        "brand": "Adafruit",
        "measures": [
        "188u – 88000 Lux (light intensity) level"
        ]
    },
    {
        "id": 4,
        "name": "Multi Gas Sensor",
        "power": 0.182,
        "file": "sensor/multi_gas_sensor.jpg",
        "datasheet": "http://wiki.seeedstudio.com/Grove-Multichannel_Gas_Sensor/",
        "price": 48.90,
        "brand": "Grove",
        "measures": [
        "1 – 1000 ppm CO (carbon monoxide) level",
        "50m – 10 ppm NO2 (nitrogen dioxide) level",
        "10 – 500 ppm C2H6OH (ethanol) level",
        "1 – 1000 ppm H2 (hydrogen) level",
        "1 – 500 ppm NH3 (ammonia) level",
        "> 1000 ppm CH4 (methane) level",
        "> 1000 ppm C3H8 (propane) level",
        "> 1000 ppm C4H10 (iso-butane) level"
        ]
    },
    {
        "id": 5,
        "name": "Sound Sensor",
        "power": 0.07,
        "file": "sensor/sound_Sensor.jpg",
        "datasheet": "https://www.dfrobot.com/wiki/index.php/Gravity:_Analog_Sound_Level_Meter_SKU:SEN0232",
        "price": 41.90,
        "brand": "Gravity",
        "measures": [
        "30 – 130 dBA (noise intensity) level"
        ]
    },
    {
        "id": 6,
        "name": "Temperature and Humidity Sensor",
        "power": 0.001,
        "file": "sensor/temperature_sensor.jpg",
        "datasheet": "https://www.dfrobot.com/wiki/index.php/SHT20_I2C_Temperature_%26_Humidity_Sensor_(Waterproof_Probe)_SKU:_SEN0227",
        "price": 23.90,
        "brand": "Sensirion",
        "measures": [
        "-40 – 125 ℃ (celsius degrees)",
        "0 – 100 % RH (relative humidity)"
        ]
    },
    {
        "id": 7,
        "name": "UV Sensor",
        "power": 0.001584,
        "file": "sensor/uv_sensor.jpg",
        "datasheet": "https://www.adafruit.com/product/3964",
        "price": 8.90,
        "brand": "Adafruit",
        "measures": [
        "UVA radiation",
        "UVB radiation",
        "UV index"
        ]
    }
    ],
    "charger": [
    {
        "id": 1,
        "name": "2 W Solar Panel",
        "power": 2,
        "file": "charger/2w_solar_panel.jpg",
        "price": 9.50,
        "width": 12.5,
        "height": 13.5
    },
    {
        "id": 2,
        "name": "10 W Solar Panel",
        "power": 10,
        "file": "charger/10w_solar_panel.jpg",
        "price": 22.95,
        "width": 33.0,
        "height": 29.0
    },
    {
        "id": 3,
        "name": "20 W Solar Panel",
        "power": 20,
        "file": "charger/20w_solar_panel.jpg",
        "price": 30.80,
        "width": 35.0,
        "height": 47.2
    }
    ]
}`)

let my_idiot = []


function init() {
    // Battery Options
    for (item in x.battery) {
        const option = x.battery[item]
        const node = document.createElement("LI")
        node.classList.add('list-group-item')
        node.classList.add('mb-3')
        node.setAttribute("id", item)
        node.setAttribute("onclick", "selectedItem(this, 'battery')");

        //node.classList.add('active')
        node_content = `
        <div class="d-flex w-100 flex-row justify-content-between">
        <div class="col-8 p-0 small">
        <h5 class="mb-3">` + option['name'] + `</h5>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Brand</dt>
        <dd class="col-sm-9">` + option['brand'] + `</dd>
        </dl>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Power</dt>
        <dd class="col-sm-9">` + option['power'] + ` W</dd>
        </dl>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Price</dt>
        <dd class="col-sm-9">` + option['price'] + ` €</dd>
        </dl>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Quantity</dt>
        <dd class="col-sm-9"><input class="form-control form-control-sm p-2 m-0" id="battery-num" onChange="updateIdiot()" value="1" style="width:50px" type="number"></dd>
        </dl>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Datasheet</dt>
        <dd class="col-sm-9">
        <a href="` + option['datasheet'] + `">Click here</a>
        </dd>
        </dl>
        </div>
        <div class="col-4 p-0 d-flex justify-content-end">
        <img src="./dir/idiotmaker/img/` + option['file'] + `" style="max-height: 170px">
        </div>
        </div>`
        node.innerHTML += node_content
        document.querySelector('#battery-list').appendChild(node); // Append <li> to <ul> with id="myList"
    }

    // Connectivity Options
    for (item in x.connectivity) {
        const option = x.connectivity[item]
        const node = document.createElement("LI")
        node.classList.add('list-group-item')
        node.classList.add('mb-3')
        node.setAttribute("id", item)
        node.setAttribute("onclick", "selectedItem(this, 'connectivity')");

        //node.classList.add('active')
        node_content = `
        <div class="d-flex w-100 flex-row justify-content-between">
        <div class="col-8 p-0 small">
        <h5 class="mb-3">` + option['name'] + `</h5>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Brand</dt>
        <dd class="col-sm-9">` + option['brand'] + `</dd>
        </dl>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Power</dt>
        <dd class="col-sm-9">` + option['power'] * 1000 + ` mW</dd>
        </dl>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Price</dt>
        <dd class="col-sm-9">` + option['price'] + ` €</dd>
        </dl>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Connectivity</dt>
        <dd class="col-sm-9">` + option['connectivity'] + `</dd>
        </dl>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Datasheet</dt>
        <dd class="col-sm-9">
        <a href="` + option['datasheet'] + `">Click here</a>
        </dd>
        </dl>
        </div>
        <div class="col-4 p-0 d-flex justify-content-end">
        <img src="./dir/idiotmaker/img/` + option['file'] + `" style="max-height: 170px">
        </div>
        </div>`

        node.innerHTML += node_content
        document.querySelector('#connectivity-list').appendChild(node)

        const list = document.querySelector('#connectivity-list')
        list.style.maxHeight = '73vh';
        list.style.overflowY = 'scroll';
        const list2 = document.querySelector('#connectivity')
        list2.style.maxHeight = 'calc(100vh - 200px)';
        // Append <li> to <ul> with id="myList"
    }

    // Sensor Options
    for (item in x.sensor) {
        const option = x.sensor[item]
        const node = document.createElement("LI")
        node.classList.add('list-group-item')
        node.classList.add('mb-3')
        node.setAttribute("id", item)
        const measureList = option['measures'].toString()
        const measures = measureList.split(",").join("<br>")
        node.setAttribute("onclick", "selectedItem(this, 'sensor')");

        node_content = `
        <div class="d-flex w-100 flex-row justify-content-between">
        <div class="col-8 p-0 small">
        <h5 class="mb-3">` + option['name'] + `</h5>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Brand</dt>
        <dd class="col-sm-9">` + option['brand'] + `</dd>
        </dl>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Power</dt>
        <dd class="col-sm-9">` + option['power'] * 1000 + ` mW</dd>
        </dl>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Price</dt>
        <dd class="col-sm-9">` + option['price'] + ` €</dd>
        </dl>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Measures</dt>
        <dd class="col-sm-9">` + measures + `</dd>
        </dl>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Datasheet</dt>
        <dd class="col-sm-9">
        <a href="` + option['datasheet'] + `">Click here</a>
        </dd>
        </dl>
        </div>
        <div class="col-4 p-0 d-flex justify-content-end">
        <img src="./dir/idiotmaker/img/` + option['file'] + `" style="max-height: 200px">
        </div>
        </div>`

        node.innerHTML += node_content
        document.querySelector('#sensor-list').appendChild(node)

        const list = document.querySelector('#sensor-list')
        list.style.maxHeight = '73vh';
        list.style.overflowY = 'scroll';
        const list2 = document.querySelector('#sensor')
        list2.style.maxHeight = 'calc(100vh - 200px)';
        // Append <li> to <ul> with id="myList"
    }

    // Charger Options
    for (item in x.charger) {
        const option = x.charger[item]
        const node = document.createElement("LI")
        node.classList.add('list-group-item')
        node.classList.add('mb-3')
        node.setAttribute("id", item)
        node.setAttribute("onclick", "selectedItem(this, 'charger')");

        node_content = `
        <div class="d-flex w-100 flex-row justify-content-between">
        <div class="col-8 p-0 small">
        <h5 class="mb-3">` + option['name'] + `</h5>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Power</dt>
        <dd class="col-sm-9">` + option['power'] + ` W</dd>
        </dl>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Price</dt>
        <dd class="col-sm-9">` + option['price'] + ` €</dd>
        </dl>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Width</dt>
        <dd class="col-sm-9">` + option['width'] + ` cm</dd>
        </dl>
        <dl class="row p-0 m-0">
        <dt class="col-sm-3 p-0 ">Height</dt>
        <dd class="col-sm-9">` + option['height'] + ` cm</dd>
        </dl>
        </div>
        <div class="col-4 p-0 d-flex justify-content-end">
        <img src="./dir/idiotmaker/img/` + option['file'] + `" style="max-height: 170px">
        </div>
        </div>`

        node.innerHTML += node_content
        document.querySelector('#charger-list').appendChild(node)

        const list = document.querySelector('#charger-list')
        //list.style.maxHeight = '75vh';
        //list.style.overflowY = 'scroll';
        const list2 = document.querySelector('#charger')
        list2.style.maxHeight = 'calc(100vh - 200px)';
        // Append <li> to <ul> with id="myList"
    }
}

function selectedItem(el, list) {
    ul = document.querySelector('#' + list + '-list').children

    if (list == 'battery') {
        my_idiot[list] = {
            "id": el.getAttribute("id"),
            "num": document.querySelector('#battery-num').value,
            "price": x[list][el.getAttribute("id")]['price'],
            "power": x[list][el.getAttribute("id")]['power']
        }
        for (i = 0; i < ul.length; i++) {
            ul[i].classList.remove('selected-item')
        }
        el.classList.add('selected-item')

    } else if (list == 'sensor') {
        if (!my_idiot.hasOwnProperty('sensor')) {
            my_idiot[list] = []
            my_idiot[list].push({
                "id": el.getAttribute("id"),
                "price": x[list][el.getAttribute("id")]['price'],
                "power": x[list][el.getAttribute("id")]['power']
            })
        } else {
            if (el.classList.contains('selected-item')) {
                for (i in my_idiot[list]) {
                    ((my_idiot[list][i]['id'] == el.getAttribute("id")) ? my_idiot[list].splice(i, 1) : '')
                }
            } else {
                my_idiot[list].push({
                    "id": el.getAttribute("id"),
                    "price": x[list][el.getAttribute("id")]['price'],
                    "power": x[list][el.getAttribute("id")]['power']
                })
            }
        }
        el.classList.toggle('selected-item')

    } else {
        my_idiot[list] = {
            "id": el.getAttribute("id"),
            "price": x[list][el.getAttribute("id")]['price'],
            "power": x[list][el.getAttribute("id")]['power']
        }

        for (i = 0; i < ul.length; i++) {
            ul[i].classList.remove('selected-item')
        }
        el.classList.add('selected-item')
    }
    updateIdiot()
}

function updateIdiot() {
    let powerTotal = 0
    let powerBattery = 0
    let powerCharger = 0
    let powerConsumption = 0
    let price = 0

    const hasGps = document.querySelector("#gps").checked
    const isSecure = document.querySelector("#secure").checked
    const mesPeriod = document.querySelector("#mess_num").value

    console.log(hasGps + ' ' + isSecure + ' ' +mesPeriod)
    container = document.querySelector('#idiot')
    for (item in my_idiot) {
        const i = my_idiot[item]['id']

        if (item == 'battery') {
            document.querySelector('div#my-' + item + ' p').innerHTML = x[item][i]['name'] + ' (x' + my_idiot[item]['num'] + ')'
            document.querySelector('div#my-' + item + ' img').src = "./dir/idiotmaker/img/" + x[item][i]['file']

        } else if (item == 'sensor') {
            sensor_list = ''
            sensor_imgs = ''

            for (a in my_idiot['sensor']) {
                s = my_idiot['sensor'][a]['id']
                sensor_list += x[item][s]['name'] + ', '
                img = `<img src="./dir/idiotmaker/img/` + x[item][s]['file'] + `" style="max-height: 60px">`
                sensor_imgs += img
            }

            document.querySelector('div#my-' + item + ' p').innerHTML = sensor_list
            document.querySelector('div#sensor-imgs').innerHTML = sensor_imgs

            if (my_idiot['sensor'].length == 0) {
                document.querySelector('div#my-' + item + ' p').innerHTML = 'No sensors selected'
            }

        } else if (item == 'connectivity') {
            //Set device name and img
            document.querySelector('div#my-' + item + ' p').innerHTML = x[item][i]['name'] + ' (' + x[item][i]['connectivity'] + ')'
            document.querySelector('div#my-' + item + ' img').src = "./dir/idiotmaker/img/" + x[item][i]['file']
        } else {
            //Set device name and img
            document.querySelector('div#my-' + item + ' p').innerHTML = x[item][i]['name']
            document.querySelector('div#my-' + item + ' img').src = "./dir/idiotmaker/img/" + x[item][i]['file']
        }
    }

    if (my_idiot['battery'] != undefined) {
        powerBattery = my_idiot['battery']['power'] * my_idiot['battery']['num']
        price += my_idiot['battery']['price'] * my_idiot['battery']['num']

        // Power Battery
        document.querySelector('#power-battery').innerHTML = powerBattery + ' W'
    }

    if (my_idiot['connectivity'] != undefined) {
        powerConsumption += my_idiot['connectivity']['power']
        price += my_idiot['connectivity']['price']

        // Update Power Consumption
        document.querySelector('#power-consumption').innerHTML = powerConsumption.toFixed(2) + ' W'
    }

    sensors = 0
    if (my_idiot['sensor'] != undefined) {
        sensors = my_idiot['sensor'].length
        for (i in my_idiot['sensor']) {
            powerConsumption += my_idiot['sensor'][i]['power']
            price += my_idiot['sensor'][i]['price']
        }
        // Update Power Consumption
        document.querySelector('#power-consumption').innerHTML = powerConsumption.toFixed(2) + ' W'
    }

    if (my_idiot['charger'] != undefined) {
        powerCharger = my_idiot['charger']['power']
        price += my_idiot['charger']['price']

        // Charging Time (h)
        chrgTime = (powerBattery / (powerCharger - powerConsumption)).toFixed(2)
        document.querySelector('#charging-time').innerHTML = chrgTime  + ' h'
        document.querySelector('#charging-footnote').innerHTML = (chrgTime / 6).toFixed(1)

        // Discharge Time (h)
        document.querySelector('#discharge-time').innerHTML = ((powerBattery / powerConsumption) / 24).toFixed(1) + ' days'
    }

    gps = ((hasGps) ? 8 : 0)
    secure = ((isSecure) ? 12+16 : 0)

    // Data Usage (per message)
    dataPerMsg = 4 + secure + 2 * sensors + 30 + gps
    document.querySelector('#data-usage').innerHTML = dataPerMsg + ' bytes'

    // Data Consumption (per month)
    dataPerMth = ((((30 * 24 * 60 * 60) / mesPeriod) * dataPerMsg) / (1024 * 1024)).toFixed(3)
    document.querySelector('#data-consumption').innerHTML = dataPerMth + ' MBs'

    // Price of Device
    document.querySelector('#price').innerHTML = price.toFixed(2) + ' €'

    // Cost per month
    document.querySelector('#op-cost').innerHTML = (1.33 + dataPerMth * 0.35).toFixed(2) + ' €'
}