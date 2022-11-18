import React from 'react'

export default function About() {
  return (
    <div>
        <div className="container my-4 px-5 ">
            <h2 className="mx-3">About Us</h2>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       <strong> Analyze your text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>TextUtils</strong> gives you a way to analyze your text quickly and efficiently. Be it word count, characer count or to copy the text.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <strong>Free to use</strong>  
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and character. Thus it is suitable for writing text with word/ character limit.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                       <strong>Browser Compatible</strong> 
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blog, excel document, pdf document, essays, etc.
                    </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
