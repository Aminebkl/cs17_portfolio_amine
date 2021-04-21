import React,{Component} from 'react'

export default class Nav extends Component {
    constructor (props) {
        super(props)
        this.state = {
            nom: '',
            prenom: '',
            email:'',
            message:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }
    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Portfolio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Galerie</a>
                            </li>
                            <button type="button" className="contactBtn bg-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Contact me
                                </button>

                                
                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

                                    <div className="modal-dialog">
                                        <div className="modal-content myCont">
                                            
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel"> Me contacter</h5>
                                                <button type="button" className="btn-close btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">x</button>
                                            </div>
                                            <div className="modal-body bac">
                                                <div className="row">
                                                    <div className="col-sm-offset-2 col-sm-8">
                                                        <label htmlFor="nom" className="px-2" > Entrez votre nom</label>
                                                        <input className="mb-2" type="text" id="nom" name="nom" value={this.state.nom} onChange={this.handleChange}/>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-sm-offset-2 col-sm-8">
                                                        <label htmlFor="prenom" className="px-2"> Entrez votre prénom</label>
                                                        <input className="mb-2" type="text" id="prenom" name="prenom" value={this.state.prenom} onChange={this.handleChange}/>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-sm-offset-2 col-sm-8">
                                                        <label htmlFor="email" className="px-2" > Entrez votre mail</label>
                                                        <input className="mb-2" type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-sm-offset-2 col-sm-8">
                                                        <label htmlFor="message" className="px-2" > Entrez votre message</label>
                                                        <textarea cclassName="mb-4" type="text" id="message" name="message" cols="20" rows="7" value={this.state.message} onChange={this.handleChange}></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                                <button onClick={()=>{ alert('votre mail à bien été envoyer'); }} type="button" class="btn btn-dark">Envoyer</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}