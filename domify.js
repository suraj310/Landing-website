let parentEle = document.querySelector('.row');

let title = 'Andhra pardesh';
let imgsrc = "https://source.unsplash.com/640x480/?Tirupati";
let imgAlt = ' image';
let articleText = 'Andhra Pradesh is a state in the south-eastern coastal region of India.Tirupati Balaji or the lord Venkatesa temple is said to be the home of one of the richest temples in the country.';
 

createArticle(title,imgsrc,imgAlt,articleText);  //function calling

createArticle('Arunachal pradesh','https://source.unsplash.com/640x480/?sports','sports image', 'Arunachal Pradesh is a state in Northeast India.  --------------------------------------in historical Indian texts and named the Aruna Mountains, which inspired the name of the state.');
createArticle('Assam','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Bihar','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Chhattisgarh','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('  Goa','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Gujrat','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Haryana','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Himachal pradesh','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Jharkhand','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('karnatka','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Kerala','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('madhya pradesh','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Maharashtra','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Manipur','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Meghalaya','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Mizoram','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Nagaland','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Odisha','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Panjab','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Rajasthan','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Sikkim','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Tamil Nadu','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Telangana','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Tripura','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Utter pradesh','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('West Bengal','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Delhi','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Dadra and Nagar Haveli and Daman and Diu','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Jammu and Kashmir','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Ladakh','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Lakshadweep','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Andaman and Nicobar','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );
createArticle('Puducherry','https://source.unsplash.com/640x480/?garden', 'garden image', articleText );



function createArticle(titleText, imgsrc, altText, articleText)    //  creating function
{
    let article = document.createElement('div');//creating div block 
    article.classList.add('article');    //creating class(article) in div block

    let title = document.createElement('h2'); //creating h2 and it store in title variable
    title.textContent = titleText;
    let image = document.createElement('img');// create  image content
    image.src = imgsrc;
    image.alt = ' image';// it is necessery bcz of accessibility
    image.classList.add('article-image');

    let para = document.createElement('p');//create paragraph in which contain some text contant
    para.textContent = articleText;

    let tagpara = document.createElement('p');
    let tagSpan = document.createElement('span');
    tagSpan.classList.add('article-tag');
    tagSpan.textContent = 'learn More';

    tagpara.appendChild(tagSpan);  //attching tag para & span

    article.insertAdjacentElement('afterbegin',title); //inserting element order according to our choice(attching article&title)
    article.insertAdjacentElement('beforeend',image);
    article.insertAdjacentElement('beforeend',para);
    article.insertAdjacentElement('beforeend',tagpara);

    console.log(article);

    parentEle.insertAdjacentElement('beforebegin',article);// inserting parent element


}

//  let amazingdiv = document.createElement('div');//creating div block

// let para = document.createElement('p');//creating para element
// para.classList.add('para');// adding class in para element
// para.textContent = 'this is my first dynamic javascript progaram';    //  to write a text in para element

// amazingdiv.appendChild(para);//inserting para element into div block
// console.log(amazingdiv);

// document.body.appendChild(amazingdiv);  // to show para elementy in our page 

