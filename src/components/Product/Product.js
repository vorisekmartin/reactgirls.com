import React from 'react';

import { 
    ProductInfoRow,
    ProductInfoColumn,
    ProductInfo,
    ProductImg,
    ProductImgContainer,
    ProductTitle, 
    ProductMainTitle,
    ProductButton
 } from './Product.elements';

import { 
    Container, 
    Wrapper,  
} from '../../components/reusable/styled';
import productArr from './productArr';

function Product() {
    return (
        <>
            <Container lightBlue >
                <Wrapper>
                    <ProductMainTitle>
                        Co je ReactGirls Prague?
                    </ProductMainTitle>
                </Wrapper>
            </Container>
            {productArr.map((product) => (
            <Container key={product.title} lightBlue={product.lightBlue} id={product.id} >
                <Wrapper > 
                    <ProductInfoRow imgStart={product.imgStart}>
                        <ProductInfoColumn>
                            <ProductTitle>
                                {product.title}
                            </ProductTitle> 
                            <ProductInfo>
                            {product.info}
                            </ProductInfo>
                            {!product.hideButton && 
                            <ProductButton href={product.link}>{product.buttonText}</ProductButton>    
                            }
                        </ProductInfoColumn>
                        <ProductImgContainer imgStart={product.imgStart}>
                            <ProductImg className={product.id} src={product.img} />
                        </ProductImgContainer >
                    </ProductInfoRow>
                </Wrapper>
            </Container>
            )
        )}
    </>
    )
}

export default Product;
