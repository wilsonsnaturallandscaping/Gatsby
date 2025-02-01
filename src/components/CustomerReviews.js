import React from 'react'
import styled from "styled-components"; 
import Stars from "./review-stars";


const ContentContainer = styled.div``;
const ContentRow = styled.div``
const FeaturedItemsOuterWrapper = styled.section`
  padding: 40px 0;
`

const OneColumn = styled.div`
  @media (max-width: 992px) {
    margin-bottom: 1em;
  }
  display: flex;
  padding: 0 8px !important;
`
const ColumnInnerContainer = styled.div`
  background: #fff;
`
const ColumnBody = styled.div`
  padding: 1.25em;
`
const Excerpt = styled.p`
  color: #666;
  font-size: 16px;
`

const ShortExcerpt = styled.p`
  color: #666;
  font-size: 16px;
`
const Heading = styled.h3`
  margin-bottom: 0.25em;
  font-size: 1.25em;
  line-height: 1.3;
  font-style: italic;
`


const Testimonials = () => {
  return (
            <FeaturedItemsOuterWrapper>
      <ContentContainer className="container">
        <ContentRow className="row">
    
         <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
          The whole process was great. They had excellent communication. Never cut a single corner and actually made my design look so much better with a few tweaks. They truly are masters of their craft. Highly recommend them for any and all landscaping, hardscaping or drainage issues.   
                </ShortExcerpt>
    <Heading className="color-dark">
       Jessica Orsette
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
        
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>    
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
    Chad and his team are excellent to work with. They pay great attention to detail. I was very impressed that the finished product looked just like the plan had intended. This team does very high quality work in a timely manner and I appreciated that very much. Elaine, the office manager, was very pleasant even when I changed several details around my patio area at one point. The last day of the project the crew educated me on plant care. They also cleaned up the area and left it looking immaculate. We will definitely use this company again in the future. Thank you, Chad, Elaine, and employees. I have received many compliments and will recommend you to neighbors and friends.
                </ShortExcerpt>
    <Heading className="color-dark">
          Hali Hitt
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
    <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
        We had landscaping, and tree and bush planting done. I highly recommend them for natural landscaping as they were very professional, helpful, and detailed. The materials were high quality and look exceptionally beautiful.
                </ShortExcerpt>
    <Heading className="color-dark">
        Nancy Lee
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
 
        </ContentRow>
</ContentContainer>
   <ContentContainer className="container pt-5">
   <ContentRow className="row">
    
         <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
      From the moment we met Chad, we knew he understood what we wanted. Dan and I know nothing about landscaping, but Chad seemed to interpret our thoughts into an actual landscape plan. . We put our trust in Chad, his landscape plan, his ability to accomplish what he presented. When the crew showed up they were so professional and polite. They worked so hard! Elaine and Mary Anne (in the office) couldn’t have been more helpful and pleasant to work with and talk to. If you are hesitating hiring Wilson Natural Landscaping don’t - they are the best!
                </ShortExcerpt>
    <Heading className="color-dark">
       Kathleen Tweed
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
        
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
     From start to finish, the team at Wilson’s Natural Landscaping has been fabulous! Here are a couple key points: - We are very particular people with high expectations. At no time were we disappointed. - All calls and emails were answered timely and professionally. - Our HOA required the Wilson’s team to jump through several hoops. With each request, they were happy to assist and accommodate as needed. - Appointments were kept and timely - The crew was hard working, polite, professional, and cleaned up at the end of each day - The work was completed timely and meticulously - All questions were answered quickly - We made changes at the end of the project which were cared for with ease - The crew accidentally cracked an irrigation pipe while working and quickly fixed the issue Thank you Wilson’s team for a job well done!
                </ShortExcerpt>
   <Heading className="color-dark">
       Kelly Marx
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
  It was a pleasure to work with the entire team at Wilson's Natural Landscaping. From the owner to the crew to the office staff, everyone was courteous, professional, respectful, and delightful. How often can you say that?? During the design phase I was given several options to ensure that I could stay within my budget which I greatly appreciated. The plan is both functional, in terms of dealing with some serious drainage issues, and appealing with nicely developed planting areas. The crew worked hard, paid close attention to every detail, and kept me informed of their progress. I could not have asked for a better execution of the transformation of my backyard. I'm certain our property value has taken a great leap now that the renovation is complete! We definitely got our money's worth. I look forward to seeing the blooms on my new dogwood and azaleas. Thanks a million!!
                </ShortExcerpt>
   <Heading className="color-dark">
      Janet F
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn>
        </ContentRow>
      </ContentContainer>
   <ContentContainer className="container pt-5">
   <ContentRow className="row">
    
         <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
   Wow what a great experience. Chad (owner) came out and surveyed our property and the water problems. He was very thorough about what we should do. When the day came to begin work the crew was here at 9 o’clock as Stated. Boy what a crew, they arrived with quite a few trucks. They had all the necessary material to complete the job. Dump truck of gravel and a dump truck of stone. The crew was fantastic. They work together and did an excellent job on the project. One of the amazing things they did was to keep the driveway blown and everything picked up as they went along. If you choose these people I can guarantee you you won’t be disappointed!
                </ShortExcerpt>
    <Heading className="color-dark">
    Lloyd Pierce
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
        
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
We had a drainage problem regarding the slope of our backyard. In addition to solving the drainage problem, we had a patio built and landscaping. The staff was very professional and helpful. A great crew to work with! High quality work. There were a couple of small items requiring attention after the job was done, but Chad and his team were very responsive and took care of our concerns quickly. I would highly recommend them and am actually having them back to do additional landscaping work.
                </ShortExcerpt>
   <Heading className="color-dark">
     Nancy Hale
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
I was referred to WNL by a friend, who recently had her patio done. I'd been looking to do something similar for a while and I was so excited to have a friend shoot me in the right direction, to a place she spoke highly of and was close by. Chad came by for a consolation just days later, with a detailed recommendation based on what I was looking for; including timing, preparation and the overall project itself. Elaine helped me navigate through choosing a design and color, based off my liking as well as kept me informed of when the team would be out to begin work. The team arrived, brought material, organized it at the top of my driveway, in the heat, with a smile on their face. To follow, the crew came out and began work, completed work and cleaned the area like it was before, with such attention to detail, respect and professionalism, across the board. I am so thrilled with the outcome, the experience and hard work that Wilson's Natural Landscaping provided for me. Don't miss out on great people, great work and a great outdoor space - choose Wilson's! Thank you to the entire team for all your help!
                </ShortExcerpt>
   <Heading className="color-dark">
    Savannah Powley
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn>
        </ContentRow>
      </ContentContainer>
 <ContentContainer className="container pt-5">
   <ContentRow className="row">
    
         <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
  Wilsons Natural Landscaping did a great job making the vision for our front flower beds and rear patio edging come to life. The team, lead by Mike, was professional, patient and courteous. They worked efficiently and with class. We are so happy with the quality of products and the result.
                </ShortExcerpt>
    <Heading className="color-dark">
  James Brunson
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
        
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
We needed our irrigation system updated an Wilson's professional crew completed the project. We are working together on our backyard "redo" to add a water feaure and natural NC plantings. Great Company and Great Staff!
                </ShortExcerpt>
   <Heading className="color-dark">
  Lynn Sims
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
We needed our irrigation system updated an Wilson's professional crew completed the project. We are working together on our backyard "redo" to add a water feaure and natural NC plantings. Great Company and Great Staff!
                </ShortExcerpt>
   <Heading className="color-dark">
   Robert G
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn>
        </ContentRow>
      </ContentContainer>
<ContentContainer className="container pt-5">
   <ContentRow className="row">
    
         <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
 Wilsons Natural Landscaping llc is a fine group of artistic folks They are a busy group and we now understand why! At initial consult it was obvious that Chad was highly experienced regarding major drainage issues and overall landscape design. We felt a comfort level with Wilsons that we did not have with other companies. The drainage fix was technical, comprehensive and well thought out ! Our project also included a large patio, multiple native plant gardens, landscape lighting and a privacy barrier . We love that the design was conceptual and that the team executed the work using their experience and feel for our property. The fine installation team are true gentlemen and professionals. These men are knowledgeable, courteous and best of all good guys! Elaine in the office is fabulous to work with. Very knowledgeable. Our family highly recommends Wilsons Natural Landscaping and will use them for all of our future projects!
                </ShortExcerpt>
    <Heading className="color-dark">
  Allison Barrick
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
        
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
Wilson’s Natural Landscaping came to my rescue when the excavators digging my new pool cut several house drain pipes. As it was my responsibility to fix such items before they could continue work (and made more urgent with all the rain we’ve had) I was in a panic and didn’t know exactly who to call. I first tried a local plumbing company that installs and repairs sewage and drainage systems. The quote they gave said it would take 3 days and even with my military discount, the amount was outrageous! That same afternoon, I found Chad’s website and saw they specialize in drainage issues. I contacted him, told him my story and reiterated my worry about getting it fixed quickly. At his suggestion, I sent him detailed pictures of the site, the damaged pipes & the huge piles of dirt to navigate around. By 7pm that evening, I had an acceptable estimate and they could come the following day. With 3 guys and a machine, Chad’s crew did what the other outfit quoted — digging, re-routing and replacing the pipes — only they replaced MORE with an even better product and tested all my downspouts to ensure proper flow— IN ONE DAY AND FOR 1/3 THE PRICE!!! I am now more confident than ever that my pool and house foundation are safe from any water backup issues. Chad’s guys were very friendly and so knowledgeable, they answered all my questions as they walked me through and cleaned up very thoroughly before they left. I will definitely continue to use them for my future landscaping projects!
                </ShortExcerpt>
   <Heading className="color-dark">
 J Calliham
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
My family has collaborated with Wilsons Natural Landscaping for the second time! We had drainage work engineered, a native butterfly garden designed and installed multiple large privacy trees. As always great communication, excellent execution and super folks building the project. **** and his team are extremely artistic and reliable. The team let us know they were about 3 months out at time of signing our contract. We can say they are worth the wait! We are planning to work with Wilsons again in the fall to tackle phase 3, creating our personal oasis! !Highly recommend.
                </ShortExcerpt>
   <Heading className="color-dark">
  Allison B
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn>
        </ContentRow>
      </ContentContainer>
<ContentContainer className="container pt-5">
   <ContentRow className="row">
    
         <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
We recently engaged Wilsons Natural Lanscaping for the 3rd phase of landscape design and construction. **** and his team of pros as always exceeded our expectations. The office folks are amazing and pleasant. **** and the team of veteran men amazed as always. The team at Wilsons is also managing our garden at a high level keeping our investment thriving.Highly recommend these folks! Well worth the 3 month wait.
                </ShortExcerpt>
    <Heading className="color-dark">
  Stacie N
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
        
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
When we built our home two years ago we knew we would eventually need landscaping done, what we did not anticipate was also needing to fix a few drainage issues around our property. From the very first meeting with Chad it felt like a perfect fit for what we were looking for. His creative ideas for how to address various issues throughout our property really helped to make our house feel like a home. His team has always been respectful, timely, and extremely efficient when completing our projects and we always look forward to working with them.
                </ShortExcerpt>
   <Heading className="color-dark">
 Kristen Howells
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
I highly recommend Wilson's Natural Landscaping. Detailed outline of two projects were provided and my expectations were exceeded in both projects. Crew began working exactly when promised. They took care of my existing landscaping. They cleaned-up after themselves. Excellent communication before, during, and after projects were completed. I love the finished product and my neighbors are complementary of the outstanding work Wilson's provided.
                </ShortExcerpt>
   <Heading className="color-dark">
 Sherry Kapelar
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn>
        </ContentRow>
      </ContentContainer>
<ContentContainer className="container pt-5">
   <ContentRow className="row">
    
         <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
This was a dream come true! This feature has been a part of my families landscape for generations! During horse and buggy days travelers would stop on their journey to town to water their horses and mules at the natural spring. However as daily use wained with indoor plumbing, thermos, and drive thru restaurants, the spring became over grown and fell into disrepair. The spring house that once provided refrigeration for past generations is long gone and no longer part of my generation’s memory. But Chad and his talented crew have returned the spring to its former glory days! I can’t help but think my grandparents and parents would be so pleased and proud! Thank you for a wonderful experience!
                </ShortExcerpt>
    <Heading className="color-dark">
 Deidra Lockamy
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
        
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
Five stars from start to finish. Landscaping was professional all the way. Everyone was friendly and helpful. Developed a design that was just as I wanted with true artistry and the crew was efficient and creative. They used Native plants and developed a small water feature that looks like a section of a mountain stream. I cant wait till Spring comes so I can see the beautiful blooms.
                </ShortExcerpt>
   <Heading className="color-dark">
 Judith L
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
Your hunt for an amazing, honest, reliable, and dependable landscape designer is over. Chad and his team are absolutely phenomenal. If I could give them 100 stars I would. Had them come out to give my front area a complete overhaul. Very easy to work with and had great ideas about what would work and what wouldn’t work while keeping in mind the wants my wife had and our budget. Now people stop driving in the neighborhood to comment about how beautiful my landscaping is. His team went above and beyond to make sure everything was completed. They went as far as setting up the statuaries my wife had around the front in our new flower beds. Will definitely recommend to any one and will use them when we are ready for our next project and any other projects we will ever have. I will never call anyone else other than Wilson’s Natural Landscaping!!! Kudos to Chad and his team. Again absolutely amazing people!
                </ShortExcerpt>
   <Heading className="color-dark">
Jeff Parker
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn>
        </ContentRow>
      </ContentContainer>
<ContentContainer className="container pt-5">
   <ContentRow className="row">
    
         <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
Top notch all the way. They fixed a longstanding drainage problem while also designing a beautiful plan for my courtyard. Communication and followup action was excellent. The work was done quickly and efficiently, as promised. This is a professional company that will do the job right.
                </ShortExcerpt>
    <Heading className="color-dark">
 Richard Shipman
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
        
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
The team at Wilson’s landscaping were so professional! They kept the work area clean, didn’t play loud music nor smoke on our property. Chad made a great design and listened to me about what we needed. Mike, the foreman, executed it better than I imagined, and he has such an eye for detail in each area. He pointed things out to me which made the landscaping look so neat and beautiful. They were the best contractors of any kind we’ve ever had to our house in 23 yrs!! Highly recommend!
                </ShortExcerpt>
   <Heading className="color-dark">
Moe Scott
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
I am absolutely overjoyed with the results of my Wilson's Natural Landscaping project. Multiple generations of my family have been in various aspects of the landscaping business. I have always carried out my ambitious landscaping projects by myself. Trusting someone else with this project was a big step for me, and I think I'm hooked! 🙂 Seriously, the team couldn't have been more professional and delightful to work with, every step of the way. They expertly solved a drainage problem that I thought might be unsolvable. I already love the plantings and I know I will love them more when they've had a chance to stretch their legs a bit. Don't hesitate to use Wilson's. They are exceptional in every aspect of their work.
                </ShortExcerpt>
   <Heading className="color-dark">
Lyndie Carnie
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn>
        </ContentRow>
      </ContentContainer>
<ContentContainer className="container pt-5">
   <ContentRow className="row">
    
         <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
We have a small backyard with a lot of trees which over the years developed a draining issue because of the roots and the movement of the soil. After researching multiple firms, we chose Wilson's because of their excellent record and because they offered an all-in-one approach to address issues while helping us update and reset our yard. They recommended and installed a french drain, added dirt to our yard, enlarged and reshaped our beds, and planted new shrubs and flowers. Their proposal process was very clear and professional and after taking some all-weather pictures, we went back and forth a couple of times to fine tune the scope of work for the best results. We appreciated their willingness to help us work through questions and reframe a couple of things as needed. The work was completed over two days. The team was focused, professional, and minimized mess for us and our neighbors. The materials were very high-quality--even the rocks for the drain had a unique color. When they left, our yard was transformed and cleanup was excellent. And the day after installation we had a heavy rain--and it was amazing to see how the drain and natural changes took care of the issue. No more standing water and bare soil! We'd highly recommend Chad and the Wilson's team for their expertise, professionalism, and all-in-one completion.
                </ShortExcerpt>
    <Heading className="color-dark">
 Michelle Davies
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
        
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
We have a small backyard with a lot of trees which over the years developed a draining issue because of the roots and the movement of the soil. After researching multiple firms, we chose Wilson's because of their excellent record and because they offered an all-in-one approach to address issues while helping us update and reset our yard. They recommended and installed a french drain, added dirt to our yard, enlarged and reshaped our beds, and planted new shrubs and flowers. Their proposal process was very clear and professional and after taking some all-weather pictures, we went back and forth a couple of times to fine tune the scope of work for the best results. We appreciated their willingness to help us work through questions and reframe a couple of things as needed. The work was completed over two days. The team was focused, professional, and minimized mess for us and our neighbors. The materials were very high-quality--even the rocks for the drain had a unique color. When they left, our yard was transformed and cleanup was excellent. And the day after installation we had a heavy rain--and it was amazing to see how the drain and natural changes took care of the issue. No more standing water and bare soil! We'd highly recommend Chad and the Wilson's team for their expertise, professionalism, and all-in-one completion.
                </ShortExcerpt>
   <Heading className="color-dark">
Patty & Steve M
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
I loved working with Wilson's Natural Landscaping. Brandi is the best and always kept us informed. Chad did a great job with recommendations and working with us to get just the right fit for our needs and our budget. Mike and his crew removed a small stand of trees and planted multiple privacy trees. they took care to ensure the quality of the trees before planting and added the good soil and fertlizer to ensure a successful planting. I will recommend Wilson's to everyone.
                </ShortExcerpt>
   <Heading className="color-dark">
Janice Pickard
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn>
        </ContentRow>
      </ContentContainer>



<ContentContainer className="container pt-5">
   <ContentRow className="row">
    
         <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
Just a really great experience from first contact to having the job finished. Our backyard was a mess, the previous owners neglected it. We asked Wilson Landscaping to come by and see what they thought they could do to help our daughters enjoy the backyard and not be scared of it! The ideas were great and they listened to us about what we were hoping to see. When the crew came out to do the job they were all very kind, and the lead spoke to us throughout the process about what to expect and timelines. At the end, everything looked great and we're all excited to have a functional and attractive backyard!
                </ShortExcerpt>
    <Heading className="color-dark">
 Matthew Jones
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
        
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
My backyard was updated to look nice but still very natural. They are very knowledgeable about what plants will work with your environment.
                </ShortExcerpt>
   <Heading className="color-dark">
Cecile Miller Murray
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn> 
            <OneColumn
      className={
        'feature-extended-image has-animation col-12 col-md-6 col-lg-4'
      }
    >
      <ColumnInnerContainer className={'shadow-md border-radius'}>
        <ColumnBody className="brd-clr">
          <span>
            <Stars />
            <ShortExcerpt>
I would highly recommend Wilson’s Natural Landscaping. They spent a lot of time with me considering options for significant drainage challenges and helped come to a final workable solution. The price was very reasonable and the crew (in office and on site) were extremely professional, prompt, and always took the time to answer my many questions. The final result truly exceeded my expectations and looks amazing.
                </ShortExcerpt>
   <Heading className="color-dark">
Monica B
            </Heading>
          </span>
        </ColumnBody>
      </ColumnInnerContainer>
    </OneColumn>
        </ContentRow>
      </ContentContainer>


    </FeaturedItemsOuterWrapper>
 )
}
export default Testimonials
