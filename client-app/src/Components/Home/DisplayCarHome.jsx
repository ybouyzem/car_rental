import React, { Component } from 'react';

//Components
import CarBoxDetail from './DisplayCarBoxHome';
//React icons
import {IoSpeedometerOutline} from 'react-icons/io5';
import {TbGasStation} from 'react-icons/tb';
import {GiCarSeat} from 'react-icons/gi';

class DisplayCar extends Component {
  render() {
    const state = [
        {
            icon: <IoSpeedometerOutline />,
            desc: "280km/h",
        },
        {
            icon: <TbGasStation />,
            desc: "Essence",
        },
        {
            icon: <GiCarSeat />,
            desc: "4 seats",
        }
    ]
    return (
      <div className='h-[100vh] min-w-full flex flex-col justify-center'>
        <div className= 'max-w-xl'>
            <img src={this.props.pic} alt="One of The Top 3 Cars" />
        </div>
        <div className='w-full flex justify-between gap-5'>
            <CarBoxDetail icon={state[0].icon} desc={state[0].desc} />
            <CarBoxDetail icon={state[1].icon} desc={state[1].desc} />
            <CarBoxDetail icon={state[2].icon} desc={state[2].desc} />
        </div>
      </div>
    )
  }
}
export default DisplayCar;