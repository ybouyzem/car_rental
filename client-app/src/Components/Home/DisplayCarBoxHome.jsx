import React, { Component } from 'react'

class Box extends Component {
  render() {
    return (
        <div className='flex flex-col items-center justify-center gap-3 bg-slate-100/20 rounded-3xl w-[150px] h-[100px]'>
            <div>
                <span className='text-2xl'>{this.props.icon}</span>
            </div>
            <div>
                <span className='text-sm'>{this.props.desc}</span>
            </div>
        </div>
    )
  }
}
export default Box;