// React
import React, { Component } from 'react';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// React Router Dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Components
import Navigation from './components/Navigation';

// Sections
import Hero from './components/Hero';
import Farming from './components/Farming';
import ProcessingExport from './components/ProcessingExport';
import Journey from './components/Journey';
import Roasting from './components/Roasting';
import EconomicsAndTransparency from './components/EconomicsAndTransparency';

class App extends Component {

  // 1. Constructor function
  constructor(props) {

    super(props);

    // 2. Defining the State
    this.state = {
      items: [],
      isLoaded: false,

      lotHistory: {},

      // Farming Section - Harvest & De-Pupling
      farmerHarvest: {
        pickedBy: '',
        pickedCherriesWeight: '',
        datePicked: '',
        variety: '',
        pickerImage: ''
      },
      farmerDePulping: {
        dePulpingVideo: ''
      },

      // Processed and Exported by Catracha Coffee - Intake & Milling
      catrachaIntakeImage: '',
      milling: {
        milledOnDate: '',
        miller: '',
        lotCurrentWeight: ''
      },
      millingLocation: '',
      millingVideo: '',
      millingImage: '',

      // Journey Highlights
      // Green Export
      exportedFrom: '',
      greenExportDate: '',
      greenExportWeight: '',
      greenExportVideo: '',
      // Green Import
      greenImportLocation: '',
      greenImportDate: '',
      greenImportImage: '',
      // Intake Green
      intakeGreenLocation: '',
      intakeGreenDate: '',
      intakeGreenWeight: '',
      intakeGreenCollector: '',
      intakeGreenVideo: '',

      // Roasting
      roasting: {

      },
      roastingCounty: '',
      roastingState: '',
      roastingCity: '',

      cuppersNotes: '',
      roastDate: '',
      roasterName: '',

      roastingImage: '',
    }
  }

  // 3. ComponentDidMount method
  componentDidMount() {

    // Get Lot History
    fetch(`https://bext360api.azure-api.net/retail/v1/getlothistory/a58fc3bf-94fd-4f0f-bd37-0947d8ba4146`, {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        lotHistory: json
      })
    });

    // Farmer Harvest, 'Picked by', 'Picked Cherries Weight', 'Date picked', 'Variety' and Image
    fetch('https://bext360api.azure-api.net/retail/v1/getlot/5c955a2e-90ef-6bf4-fa8a-1813ee5d4687', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({

          farmerHarvest: {

            pickedBy: json.customData['FarmerName.Measure'].value,
            pickedCherriesWeight: json.customData['TotalValue.Measure'].value + ' lbs',
            datePicked: json.customData['HarvestDate.MeasureTime'].dateTimeValue,
            variety: json.customData['Varietal.Measure'].value,
            pickerImage: json.customData['LotFarmerProductImage.Measure'].value

          }

        })
      });

    // De-Pulping Video
    fetch('https://bext360api.azure-api.net/retail/v1/getvideo/df5e4e96-5133-4c85-ad5f-032d65182723', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({

          farmerDePulping: {
            dePulpingVideo: json
          }

        })
      });

    // 4. API Call to Roasting Node
    fetch('https://bext360api.azure-api.net/retail/v1/getnode/73427e9e-e29d-4b33-9a27-95244bdb0370', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        roastingCounty: json.defaultLocation.country,
        roastingState: json.defaultLocation.state,
        roastingCity: json.defaultLocation.city,
        isLoaded: true,
      })
    });

    // 5. API Call to Roasting Lot
    fetch('https://bext360api.azure-api.net/retail/v1/getlot/50933c21-a1b8-4774-b023-0b7ec19063f4', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          cuppersNotes: json.customData['CuppersNotes.Measure'].value,
          roastDate: json.customData['RoastDate.MeasureTime'].dateTimeValue,
          roasterName: json.customData['FarmerName.Measure'].value,
        })
      });

    // 5. API Call to Roasting Image
    fetch('https://bext360api.azure-api.net/retail/v1/getimage/3ba5c81b-076c-4db4-a235-67a6b8b8e90f', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          roastingImage: json,
        })
      });

    // Catracha Intake Parchment, Image
    fetch('https://bext360api.azure-api.net/retail/v1/getimage/2d79f311-eb5f-4a4a-96b8-ec9adfca1617', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          catrachaIntakeImage: json,
        })
      });

    // Milling
    fetch('https://bext360api.azure-api.net/retail/v1/getlot/b0c1846f-8cef-410e-a2ec-f6d9f3843e9f', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          milling: {
            milledOnDate: `${json.customData['MillingDate.MeasureTime'].dateTimeValue.split('T')[0]}`,
            miller: `${json.customData['FarmerName.Measure'].value}`,
            lotCurrentWeight: `${json.currentWeight} Lbs`
          }
        })
      });
    // Milling Location
    fetch('https://bext360api.azure-api.net/retail/v1/getnode/8a14226b-873b-4893-bedc-a9699dc28472', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        millingLocation: `${json.defaultLocation.city}, ${json.defaultLocation
          .state}, ${json.defaultLocation.country}`
      })
    });
    // Milling Video
    fetch('https://bext360api.azure-api.net/retail/v1/getvideo/5b80c8dc-1dac-4eaf-8674-75052d83d0c5', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          millingVideo: json
        })
      });
    // Milling Image
    fetch('https://bext360api.azure-api.net/retail/v1/getimage/14d5be6c-8f0e-48dd-88ca-46a1958a2fcf', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          millingImage: json,
        })
      });

    // Journey Highlights
    // Green Export - Exported From
    fetch('https://bext360api.azure-api.net/retail/v1/getnode/c51f7616-5fb6-4416-be83-c98dc0d25df1', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        exportedFrom: `${json.defaultLocation.city}, ${json.defaultLocation
          .state}, ${json.defaultLocation.country}`
      })
    });
    // Green Export - Date & Weight
    fetch('https://bext360api.azure-api.net/retail/v1/getlot/f1222ba7-0c10-4abf-b49f-c197be1ec8e1', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          greenExportDate: `${json.customData['ExportDate.MeasureTime'].dateTimeValue.split('T')[0]}`,
          greenExportWeight: ` ${json.absorbedWeight} Lbs`
        })
      });
    // Green Export - Video
    fetch('https://bext360api.azure-api.net/retail/v1/getvideo/c8bf9e23-1ae9-4422-8e00-984566d5663a', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          greenExportVideo: json
        })
      });
    // Green Import - Imported At
    fetch('https://bext360api.azure-api.net/retail/v1/getnode/b2d1d8b3-498b-424e-87df-3050aa237115', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        greenImportLocation: `${json.defaultLocation.city}, ${json.defaultLocation
          .state}, ${json.defaultLocation.country}`
      })
    });
    // Green Import - Date
    fetch('https://bext360api.azure-api.net/retail/v1/getlot/8f43a6a8-52aa-45d6-9bba-cbf8f823037d', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          greenImportDate: `${json.customData['ImportDate.MeasureTime'].dateTimeValue.split('T')[0]}`
        })
      });
    // Green Import - Image
    fetch('https://bext360api.azure-api.net/retail/v1/getimage/4aa16929-f043-4520-809d-d1f62cfb106d', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          greenImportImage: json,
        })
      });
    // CIntake Green - Roaster Received in
    fetch('https://bext360api.azure-api.net/retail/v1/getnode/1dc41db1-f7b5-45f1-8810-432e6be023cb', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        intakeGreenLocation: `${json.defaultLocation.city}, ${json.defaultLocation.state}, ${json.defaultLocation.country}`
      })
    });
    // Intake Green - Date, Weight, & Received by
    fetch('https://bext360api.azure-api.net/retail/v1/getlot/a58fc3bf-94fd-4f0f-bd37-0947d8ba4146', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          intakeGreenDate: `${json.customData['TransportDate.MeasureTime'].dateTimeValue.split('T')[0]}`,
          intakeGreenWeight: `${json.currentWeight} Lbs`,
          intakeGreenCollector: ` ${json.customData['CollectorName.Measure'].value}`
        })
      });
    // Intake Green - Video
    fetch('https://bext360api.azure-api.net/retail/v1/getvideo/6d48b0b4-25d3-469e-9d60-a657724ca296', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          intakeGreenVideo: json
        })
      });

  }

  render() {

    var { isLoaded, roastingCity, roastingCounty, roastingState, cuppersNotes, roastDate, roasterName, roastingImage } = this.state;


    // console.log(this.state.farmerDePulping.dePulpingVideo);


    if (!isLoaded) {
      return (
        <div>Loading</div>
      );
    } else {

      return (
        <>

          <Navigation />
          <Hero />
          <Farming
            farmerHarvest={this.state.farmerHarvest}
            farmerDePulping={this.state.farmerDePulping.dePulpingVideo}
            lotHistory={this.state.lotHistory}
          />
          <ProcessingExport
            lotHistory={this.state.lotHistory}
            catrachaIntakeImage={this.state.catrachaIntakeImage}
            milling={this.state.milling}
            millingLocation={this.state.millingLocation}
            millingVideo={this.state.millingVideo}
            millingImage={this.state.millingImage}
          />
          <Journey
            // Green Export 
            exportedFrom={this.state.exportedFrom}
            greenExportDate={this.state.greenExportDate}
            greenExportWeight={this.state.greenExportWeight}
            greenExportVideo={this.state.greenExportVideo}
            // Green Import
            greenImportLocation={this.state.greenImportLocation}
            greenImportDate={this.state.greenImportDate}
            greenImportImage={this.state.greenImportImage}
            // Green Intake
            intakeGreenLocation={this.state.intakeGreenLocation}
            intakeGreenDate={this.state.intakeGreenDate}
            intakeGreenWeight={this.state.intakeGreenWeight}
            intakeGreenCollector={this.state.intakeGreenCollector}
            intakeGreenVideo={this.state.intakeGreenVideo}
          />
          <Roasting
            country={roastingCounty}
            state={roastingState}
            city={roastingCity}
            cuppersNotes={cuppersNotes}
            roastDate={roastDate}
            roasterName={roasterName}
            roastingImage={roastingImage}
          />
          <EconomicsAndTransparency />

        </>
      );
    }

  }
}

export default App;
