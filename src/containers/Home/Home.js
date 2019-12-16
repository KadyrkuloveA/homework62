import React, {Component, Fragment} from 'react';
import nanoid from 'nanoid';
import './Home.css';

class Home extends Component {
    state = {
        film: '',
        films: [],
        joke: ''
    };

    reversal = (event) => {
        let film = event.target.value;
        this.setState({film});
    };

    addFilm = () => {
        let films = [...this.state.films];
        let name = this.state.film;
        let film = {name, id: nanoid()};
        films.push(film);
        this.setState({films});
    };

    filmDel = (filmId) => {
        let films = [...this.state.films];
        let id = films.findIndex(t => t.id === filmId);
        films.splice(id, 1);
        this.setState({films});
    };

    nameChange = (event, filmId) => {
        let films = [...this.state.films];
        let index = films.findIndex(t => t.id === filmId);
        let film = {...films[index]};
        film.name = event.target.value;
        films[index] = film;
        this.setState({films});
    };

    render() {
        return (
            <Fragment>
                <h2 className='headline'>Here you can add movies that you are going to watch or any other notes that you can edit or delete</h2>
                <div className='Films'>
                    <div className='inputContainer'>
                        <input type="text" value={this.state.film} onChange={(event) => this.reversal(event)} className='input'/>
                        <button onClick={this.addFilm} className='btn'>Add</button>
                    </div>
                    {this.state.films.map(film => (
                        <div className='filmContainer'>
                            <input type="text" value={film.name} onChange={(event) => this.nameChange(event, film.id)} className='filmInput'/>
                            <button onClick={() => this.filmDel(film.id)} className='delBtn'>✖</button>
                        </div>
                    ))}
                </div>
                <h3 className='headline'>do not forget to drag to other sections</h3>
            </Fragment>
        );
    }
}

export default Home;