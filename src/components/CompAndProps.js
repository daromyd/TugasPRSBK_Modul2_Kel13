import React, {Component} from 'react'
import '../App.css';
import image1 from './IMG_11.jpg';
import image2 from './IMG_22.jpg';
import Select from '../elements/Select';


function Square(props) {
    return(
        <div >
            <img src={props.image} alt={props.nama} class="avatar"/>
            <h2>{props.nama}</h2>
            <p>{props.nim}</p>
        </div>
    );
}

export default class CompAndProps extends Component{
    render(){
        const background={
            backgroundColor : this.props.bgcolor
        }
        return(
            <div >
                <div className="User-info" style={background}>
                    <Square image={image1} nama="Daromy Darojat" nim="21120117130066" />
                    <Select color="black">
                        <option value="kelas">Kelas</option>
                        <option value="a">A</option>
                        <option value="b">B</option>
                    </Select>
                </div>
                <div className="User-info" style={background}>
                    <Square image={image2} nama="Aldio Bangkit W." nim="21120117120034" />
                    <Select color="black">
                        <option value="kelas">Kelas</option>
                        <option value="a">A</option>
                        <option value="b">B</option>
                    </Select>
                </div>
            </div>
        )
    }
}
