import Styled from 'styled-components';
import {HeaderInput} from './styled';



const Row = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    p{
        color: #fff !important;
    }
    div{
        color: #fff !important;
    }

    .col{
        min-width: 240px;
        border-radius: 5px;
        overflow: hidden;
        margin: 20px;
        border: 1px solid black;
        border-bottom: 1px solid red;
        transition: .4s;

        &:hover{
            border-bottom: 4px solid darkred;
        }
        p{
            color: #fff !important;
        }
        a{
            text-decoration: none;
            color: #333;
            font-weight: 600; 
            font-size: 20px; 
            cursor: pointer;

            &:hover{
                .card-body{
                    color: #279EDA;
                }
            }

            .img-content{
                width: 100%;
                background-image: url(https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg);
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                position: relative;

                span{
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    color: #fff;
                    margin: 0;
                    font-weight: 500;
                    background-color: rgba(0,0,0,0.8);
                    padding: 2px 5px;
                    font-size: 17px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    svg{
                        fill: orange;
                    }
                }
                img{
                    width: 100%;
                    height: 160px;
                }
            }
            .card-body{
                text-align: center;
                height: 61px; 
                max-width: 100%;
                overflow: hidden;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis; 
                color: #fff;
            }

        }

    }

    .col-12{
        p{
            color: #fff !important;
        }
    }
    .col-11{
        p{
            color: #fff !important;
        }
        .row{
            border: none !important; 
            &:hover{
                box-shadow: 0 0 20px 1px red;
            }
        }
    }


    @media (max-width: 550px){
        &{
            display: block;
            .col{
                width: 70%;
                margin: 20px auto;
                a{
                    .img-content{
                        img{
                            height: 200px;
                        }
                    }
                }
            }
        }
    }

`;



const SectionTitle = Styled.p`
    font-size: 25px;
    font-weight: 600;
    position: relative;
    padding: 0 10px;
    margin: 35px 0;
    margin-left: 20px;
    color: #fff;
    &:before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 3px;
        background-color: darkred;
        height: 100%;
    }
`;



const Col = Styled.div`
    cursor: pointer;
    border-bottom: 1px solid darkgrey;
    padding: 10px 0;
    border-color: #DFE3E7;

    &:hover{
        background-color: #F1F1F1F1;
    }
`;

const Headerinput = Styled.input`
    background-color: black !important;
    border-color: darkred !important;
`;

export { Row,SectionTitle,Col,Headerinput };





































