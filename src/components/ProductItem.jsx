import React, {Component} from 'react';
import '../sass/style.css';

class ProductItem extends Component {

    constructor (props){
        super(props);
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.state={
            count:1
        }
    }
    increment(){
        this.setState({
            count: this.state.count +1
        })
    }
    decrement(){
        if(this.state.count > 1){
            this.setState({
                count: this.state.count -1
            })
        }
    }
    render() {
        return (
            <div className='all col-md-3'>
        <div id={`carouselExampleFade${this.props.count}`} class="carousel slide carousel-fade " data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={this.props.photo1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={this.props.photo2} class="d-block w-100" alt="..." />
              </div>
        
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target={`#carouselExampleFade${this.props.count}`} data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target={`#carouselExampleFade${this.props.count}`} data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className='allPart'>
            <div className="allPartOne d-flex flex-column">
                <a href="#" className='title'>{this.props.title}</a>
                <a href="#" className='about'>{this.props.about}</a>
                <p>{this.props.price}</p>
                
            </div>
            <div className="allPartTwo d-flex flex-column ">
                <div >
                    <button onClick={this.decrement} className='btn'>-</button>
                    <span>{this.state.count}</span>
                    <button onClick={this.increment}   className='btn'>+</button>
                    <button className='btn'>Add to cart</button>
                </div>
                <div>
                <p>Quickview</p>
                <p> Add to compare</p>
                </div>
            </div>
          </div>
          </div> 
        )
    }
}

export default ProductItem