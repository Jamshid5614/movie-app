import Styled from 'styled-components';



const Row = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;


    .col{
        min-width: 240px;
        border-radius: 5px;
        overflow: hidden;
        margin: 20px;
        border: 1px solid darkgrey; 
        
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
                // min-height: 160px;
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
            }

        }

    }


    @media (max-width: 550px){
        &{
            display: block;
            .col{
                width: 80%;
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
    &:before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 3px;
        background-color: #105F98;
        height: 100%;
    }
`;







export { Row,SectionTitle };





































