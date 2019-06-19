import React, { Component } from "react";
import "./demo.css"
import "./footer-distributed.css"

class Footer extends Component {
    render() {
        return (

            <div>
                <div>

                    <footer class="footer-distributed">

                        <div class="footer-right">

                            <a href="#"><i class="fa fa-facebook"> </i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-github"></i></a>

                        </div>

                        <div class="footer-left">

                         
                            <p>Criport &copy; 2019</p>
                        </div>

                    </footer>


                </div>
            </div>
        );
    }
}

export default Footer