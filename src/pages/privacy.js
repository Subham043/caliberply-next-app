import Navbar2 from 'components/Navbar2'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Footer } from 'components';

const Privacy = () => {

    const [showtab , setShowTab] = useState(1)

    const handletab =(e)=>{
        setShowTab(e);
    }
  return (
    <>
    <Head>
        <title>privacy</title>
    </Head>
    <Navbar2/>
    <section id='page' className='page_title'>
            <div className='auto_container'>
                <h1>Privacy</h1>
                <ul className='bread_crumb clearfix'>
                   <li>
                    <Link href='/'>Home</Link>
                    </li> 
                    <li>
                    Privacy
                    </li>
                </ul>
            </div>
    </section>
    <section className='about-us container'>
        <section className='call-back-section-  section-p' style={{paddingTop:'0px'}}>
            <div className='auto-container'>
                <div className='content-data'>
                    <div className='row'>
                        <div onClick={()=>handletab(1)} className='col-md-4 ' style={{marginBottom:'10px'}}>
                            <button  className={showtab===1?'theme-btn privacy-btn-active':'theme-btn'}>SHIPPING POLICY</button>
                        </div>
                        <div onClick={()=>handletab(2)} className='col-md-4' style={{marginBottom:'10px'}}>
                            <button className={showtab===2?'theme-btn privacy-btn-active':'theme-btn'}>TERMS AND CONDITIONS</button>
                        </div>
                        <div onClick={()=>handletab(3)} className='col-md-4' style={{marginBottom:'10px'}}>
                            <button className={showtab===3?'theme-btn privacy-btn-active':'theme-btn'}>PRIVACY POLICY</button>
                        </div>
                    </div>


                    <div className={showtab===1?'content-privacy-tab':'myaccount-content-display'}>
                        <h2 className='heading-1-privacy'>Shipping Policy</h2>
                        <p>
                        Ecogen Industries endeavors to deliver products to the recipient as per the delivery option selected by the User while placing the order. The delivery time is subject to the location you provided for delivery.
                        </p>
                        <br/>
                        <p>For the convenience and requirements of Customers, Ecogen Industries provides two options for deliveries, Fixed Time Deliveries and Free Deliveries. Ecogen Industries charges nominal amounts for selecting fixedtime delivery and such charges are displayed on the web page while selecting the timeframe for delivery from our customers.</p>
                        <br/>
                        <p>However under Fixed Time Deliveries, Ecogen Industries is obliged to deliver your product as per your opted time but it is always subject to factors beyond its reasonable control &quot;Force Majeure&quot; Events including unexpected travel delays from our courier partners and transporters due to weather conditions, strikes, lockdown or other unforeseen circumstances. In such cases, we will proactively reach out to you. The delivery cannot be redirected to any other address by calling the delivery partners or raising a query. Kindly ensure that you enter the correct details and contact numbers. Before any festival or major occasion, we suggest that you place your order at least couple of days in advance. The demand will be high during those days and we do not wish to disappoint.</p>
                        <br/>
                        <h2 className='heading-1-privacy'>REPLACEMENT / RETURN POLICY:</h2>
                        <p>Goods once sold cannot be returned / exchanged. We take stringent measures to ensure that the items delivered to you are in perfect condition. However, there is a remote possibility that:</p>
                        <br/>
                        <ul><li>The item may be damaged during transit</li><li>Or there might be a manufacturing defect</li><li>Or that a wrong item is delivered to you</li></ul>
                        <br/>
                        <p>In only such cases as given above, we will replace the item at no extra cost, provided that the request for replacement of item is made immediately at the time of delivery. </p>
                        <br/>
                        <p>The Purchaser agrees to inspect and check thoroughly the materials at the time of delivery itself. Any defect particular if sheets are opened up/face complete distortion/Thickness difference of 2MM onwards etc. shall be informed by the Purchaser immediately. </p>
                        <br/>
                        <h2 className="heading-1-privacy">CANCELLATION POLICY:</h2>
                        <br/>
                        <p>Cancellation of order is permitted any time before dispatch. Customer would however have to bear transportation charges at actuals and also Bank Charges at the rate of 2.5%. The customer agrees not to dispute the decision made by Ecogen Industries and accept Ecogen Industries decision regarding the cancellation.</p>
                        <br/>
                        <p>For cancelling your order, you will have to get in touch with our Customer Support Team by sending an email to hello@calibreply.com giving your Order Number. </p>
                        <br/>
                        <i style={{fontSize:'18px'}}>Cancellation of Order by Ecogen Industries</i>
                        <br/>
                        <p>Ecogen Industries reserves the right to refuse or cancel any order placed for a product that is listed at an incorrect price or for any other reason. This shall be regardless of whether the order has been confirmed and/or payment been received. 100% payment shall be refunded and the User shall be informed of the same.</p>
                    </div>
    
                    <div className={showtab===2?'content-privacy-tab':'myaccount-content-display'}>
                    <h2 className="heading-1-privacy">TERMS AND CONDITIONS:</h2>
                    <p>LAST REVISION: 2-11-2022 PLEASE READ THE TERMS AND CONDITIONS CAREFULLY. BY USING THIS WEBSITE OR ORDERING PRODUCTS FROM THIS WEBSITE YOU AGREE TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS. These Terms and Conditions &quot;T&amp;C&quot; govern your use of this website, [www.calibreply.com ] [www.centuryply.com ] the &quot;Website&quot;, Ecogen Industries &quot;Business Name&quot; offer of products for purchase on this Website, or your purchase of products available on this Website. This T&amp;C includes, and incorporates by this reference, the policies and guidelines referenced below. Ecogen Industries reserves the right to change or revise the terms and conditions at any time by posting any changes or a revised T&amp;C on this Website. Ecogen Industries will alert you that changes or revisions have been made by indicating on the top of this T&amp;C the date it was last revised. The changed or revised T&amp;C will be effective immediately after it is posted on this Website. Your use of the Website following the posting any such changes or of a revised T&amp;C will constitute your acceptance of any such changes or revisions. Ecogen Industries encourages you to review this T&amp;C whenever you visit the Website to make sure that you understand the terms and conditions governing the use of the Website. This T&amp;C does not alter in any way the terms or conditions of any other written agreement you may have with Ecogen Industries for other products or services. If you do not agree to this T&amp;C including any referenced policies or guidelines, please immediately terminate your use of the Website. If you would like to print this T&amp;C, please click the print button on your browser toolbar.</p>
                    <br/>
                    <p>I. PRODUCTS Terms of Offer. This Website offers for sale and gifting of certain products the &quot;Products&quot;. By placing an order for Products through this Website, you agree to the terms set forth in this T&amp;C. </p>
                    <br/>
                    <p>Customer Solicitation: Unless you notify our third-party call centre reps or direct Ecogen Industries sales reps, while they are calling you, of your desire to opt-out from further direct company communications and solicitations, you are agreeing to continue to receive further emails and calls solicitations from Ecogen Industries and it&apos;s designated in house or third party call teams. </p>
                    <br/>
                    <p>Opt-Out Procedure: We provide 3 easy ways to opt-out of future solicitations. 1. You may use the opt-out link found in any email solicitation that you may receive. 2. You may also choose to opt-out, out by sending your email address to [support@calibreply.com].</p>
                    <br/>
                    <p>3. You may send a written ‘remove request’ to [No, 39/ 1 Pattanagere road near RV Engineering College, Next to Global Academy for Learning School, Mysore Road, Bangalore-560059]. </p>
                    <br/>
                    <p>Proprietary Rights. Ecogen Industries has proprietary rights and trade secrets in the Products. You may not copy, reproduce, resell or redistribute any Product manufactured and/or distributed by Ecogen Industries. Ecogen Industries also has rights to all trademarks and trade dress and specific layouts of this webpage, including calls to action, text placement, images and other information. </p>
                    <br/>
                    <p>Sales Tax. If you purchase any Products, you will be responsible for paying any applicable sales tax.</p>
                    <br/>
                    <p>II. WEBSITE </p>
                    <br/>
                    <p>Content; Intellectual Property; Third-Party Links. In addition to making Products available, this Website also offers information and marketing materials. This Website also offers information, both directly and through indirect links to third-party websites. Ecogen Industries does not always create the information offered on this Website; instead, the information is often gathered from other sources. To the extent that Ecogen Industries does create the content on this Website, such content is protected by the intellectual property laws of India, foreign nations, and international bodies. Unauthorised use of the material may violate copyright, trademark, and/or other laws. You acknowledge that your use of the content on this Website is for personal, noncommercial use. Any links to third-party websites are provided solely as a convenience to you. Ecogen Industries does not endorse the contents of any such third-party websites. Ecogen Industries is not responsible for the content of or any damage that may result from your access to or reliance on these third-party websites. If you link to third-party websites, you do so at your own risk. </p>
                    <br/>
                    <p>Use of Website; Ecogen Industries is not responsible for any damages resulting from use of this website by anyone. You will not use the Website for illegal purposes. You will 1 abide by all applicable local, state, national, and international laws and regulations in your use of the Website including laws regarding intellectual property., 2. not interfere with or disrupt the use and enjoyment of the Website by other users, 3. not resell material on the Website, 4. not engage, directly or indirectly, in the transmission of &quot;spam&quot;, chain letters, junk mail or any other type of unsolicited communication, and 5. not defame, harass, abuse, or disrupt other users of the Website Licence. By using this Website, you are granted a limited, non-exclusive, non-transferable right to use the content and materials on the Website in connection with your normal, noncommercial, use of the Website. You may not copy, reproduce, transmit, distribute, or create derivative works of such content or information without express written authorization from Ecogen Industries or the applicable third party if third-party content is at issue..</p>
                    <br/>
                    <p>Posting: By posting, storing, or transmitting any content on the Website, you hereby grant Ecogen Industries a perpetual, worldwide, non-exclusive, royalty-free, assignable, right and licence to use, copy, display, perform, create derivative works from, distribute, have distributed, transmit and assign such content in any form, in all media now known or hereinafter created, anywhere in the world. Ecogen Industries does not have the ability to control the nature of the user-generated content offered through the Website. You are solely responsible for your interactions with other users of the Website and any content you post. Ecogen Industries is not liable for any damage or harm resulting from any posts or interactions between users. Ecogen Industries reserves the right, but has no obligation, to monitor interactions between and among users of the Website and to remove any content Ecogen Industries deems objectionable, in Company&apos;s sole discretion.</p>
                    <br/>
                    <p>III. DISCLAIMER OF WARRANTIES</p>
                    <br/>
                    <p>YOUR USE OF THIS WEBSITE AND/OR PRODUCTS ARE AT YOUR SOLE RISK. THE WEBSITE AND PRODUCTS ARE OFFERED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. ECOGEN INDUSTRIES EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT WITH RESPECT TO THE PRODUCTS OR WEBSITE CONTENT, OR ANY RELIANCE UPON OR USE OF THE WEBSITE CONTENT OR PRODUCTS. &quot;PRODUCTS&quot; INCLUDE TRIAL PRODUCTS.. </p>
                    <br/>
                    <p>WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, ECOGEN INDUSTRIES MAKES NO WARRANTY:</p>
                    <br/>
                    <p>THAT THE INFORMATION PROVIDED ON THIS WEBSITE IS ACCURATE, RELIABLE, COMPLETE, OR TIMELY. </p>
                    <br/>
                    <p>THAT THE LINKS TO THIRD-PARTY WEBSITES ARE TO INFORMATION THAT IS ACCURATE, RELIABLE, COMPLETE, OR TIMELY.</p>
                    <br/>
                    <p>NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THIS WEBSITE WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN.</p>
                    <br/>
                    <p>AS TO THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE PRODUCTS OR THAT DEFECTS IN PRODUCTS WILL BE CORRECTED.</p>
                    <br/>
                    <p>REGARDING ANY PRODUCTS PURCHASED OR OBTAINED THROUGH THE WEBSITE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES, SO SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU. </p>
                    <br/>
                    <p>IV. LIMITATION OF LIABILITY </p>
                    <br/>
                    <p>ECOGEN INDUSTRIES ENTIRE LIABILITY, AND YOUR EXCLUSIVE REMEDY, IN LAW, IN EQUITY, OR OTHERWISE, WITH RESPECT TO THE WEBSITE CONTENT AND PRODUCTS AND/OR FOR ANY BREACH OF THIS T&amp;C IS SOLELY LIMITED TO THE AMOUNT YOU PAID, LESS SHIPPING AND HANDLING, FOR PRODUCTS PURCHASED VIA THE WEBSITE.</p>
                    <br/>
                    <p>ECOGEN INDUSTRIES WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES IN CONNECTION WITH THIS T&amp;C OR THE PRODUCTS IN ANY MANNER, INCLUDING LIABILITIES RESULTING FROM 1. THE USE OR THE INABILITY TO USE THE WEBSITE CONTENT OR PRODUCTS; 2. THE COST OF PROCURING SUBSTITUTE PRODUCTS OR CONTENT; 3. ANY PRODUCTS PURCHASED OR OBTAINED OR TRANSACTIONS ENTERED INTO THROUGH THE WEBSITE; OR 4 ANY LOST PROFITS YOU ALLEGE. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES SO SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. </p>
                    <br/>
                    <p>V. INDEMNIFICATION</p>
                    <br/>
                    <p>You will release, indemnify, defend and hold harmless Ecogen Industries, and any of its contractors, agents, employees, officers, directors, shareholders, affiliates and assigns from all liabilities, claims, damages, costs and expenses, including reasonable attorneys&apos; fees and expenses, of third parties relating to or arising out of 1. this T&amp;C or the breach of your warranties, representations and obligations under this T&amp;C; 2. the Website content or your use of the Website content; 3. the Products or your use of the Products including Trial Products ; 4. any intellectual property or other proprietary rights of any person or entity; 5. your violation of any provision of this T&amp;C; or 6. any information or data you supplied to Ecogen Industries. When Ecogen Industries is threatened with suit or sued by a third party, Ecogen Industries may seek written assurances from you concerning your promise to indemnify Ecogen Industries; your failure to provide such assurances may be considered by Ecogen Industries to be a material breach of this T&amp;C. Ecogen Industries will have the right to participate in any defence by you of a third-party claim related to your use of any of the Website content or Products, with counsel of Ecogen Industries choice at its expense. Ecogen Industries will reasonably cooperate in any defence by you of a third-party claim at your request and expense. You will have sole responsibility to defend Ecogen Industries against any claim, but you must receive Ecogen Industries&apos; prior written consent regarding any related settlement. The terms of this provision will survive any termination or cancellation of this T&amp;C or your use of the Website or Products. </p>
                    <br/>
                    <p>By using this Website or ordering Products, you acknowledge that you have read and agree to be bound by all terms and conditions on this Website.</p>
                    <br/>
                    <p>VI. GENERAL</p>
                    <br/>
                    <p>Force Majeure. Ecogen Industries will not be deemed in default hereunder or held responsible for any cessation, interruption or delay in the performance of its obligations hereunder due to earthquake, flood, fire, storm, natural disaster, an act of God, war, terrorism, armed conflict, labour strike, lockout, or boycott. </p>
                    <br/>
                    <p>Cessation of Operation. Ecogen Industries may at any time, in its sole discretion and without advance notice to you, cease the operation of the Website and distribution of the Products. Effect of Waiver. The failure of Ecogen Industries to exercise or enforce any right or provision of this T&amp;C will not constitute a waiver of such right or provision. If any provision of this T&amp;C is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavour to give effect to the party&apos;s intentions as reflected in the provision, and the other provisions of this T&amp;C remain in full force and effect. Governing Law; Courts of Karnataka. This Website originates from Bangalore, Karnataka. This T&amp;C will be governed by the laws of the State of Karnataka without regard to its conflict of law principles to the contrary. Neither you nor Ecogen Industries will commence or prosecute any suit, proceeding or claim to enforce the provisions of this T&amp;C, to recover damages for breach of or default of this T&amp;C, or otherwise arising under or by reason of this T&amp;C, other than in courts located in the State of Karnataka. By using this Website or ordering Products, you consent to the jurisdiction and venue of such courts in connection with any action, suit, proceeding or claim arising under or by reason of this T&amp;C. You hereby waive any right to trial by jury arising out of this T&amp;C and any related documents. Statute of Limitation. You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to the use of the Website or Products or this T&amp;C must be filed within one 1. year after such claim or cause of action arose or be forever barred </p>
                    <br/>
                    <p>Termination. Ecogen Industries reserves the right to terminate your access to the Website if it reasonably believes, in its sole discretion, that you have breached any of the terms and conditions of this T&amp;C. Following termination, you will not be permitted to use the Website and Ecogen Industries may, in its sole discretion and without advance notice to you, cancel any outstanding orders for Products. If your access to the Website is terminated, Ecogen Industries reserves the right to exercise whatever means it deems necessary to prevent unauthorized access to the Website. This T&amp;C will survive indefinitely unless and until Ecogen Industries chooses, in its sole discretion and without advance to you, to terminate it. Domestic Use. Ecogen Industries makes no representation that the Website or Products are appropriate or available for use in locations outside India. Users who access the Website from outside India do so at their own risk and initiative and must bear all responsibility for compliance with any applicable local laws. </p>
                    <br/>
                    <p>Assignment. You may not assign your rights and obligations under this T&amp;C to anyone. Ecogen Industries may assign its rights and obligations under this T&amp;C at its sole discretion and without advance notice to you.</p>
                    <br/>
                    <p>BY USING THIS WEBSITE OR ORDERING PRODUCTS FROM THIS WEBSITE YOU AGREE</p>
                    <p>TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS Terms And Conditions.</p>
                    </div>

                    <div className={showtab===3?'content-privacy-tab':'myaccount-content-display'}>
                    <h2 class="heading-1-privacy">PRIVACY POLICY:</h2>
                    <br/>
                    <p><b>Note:</b> This Privacy Policy forms an integral part of the Terms of Use and other policies, disclaimers etc. available on the Website of Ecogen Industries and shall be read in conjunction </p>
                    <br/>
                    <p>Ecogen Industries is the sole owner of the information collected on the Website. This privacy statement applies only to information collected by the Website. We know that you care how information about you is used and shared, and we appreciate your trust that we will do so carefully and sensibly. This Privacy Policy describes how Ecogen Industries name of the company. collect and process your personal information on our website, www.calibreply.com, www.centuryply.com devices, products, services, online marketplace and applications that reference this Privacy Policy together &quot;Services&quot;.. </p>
                    <br/>
                    <p>By using our Services you agree to our use of your personal information including sensitive personal information. in accordance with this Privacy Policy, as may be amended from time to time by us at our discretion. You also agree and consent to us collecting, storing, processing, transferring, and sharing your personal information including sensitive personal information. with third parties or service providers for the purposes set out in this Privacy Policy. </p>
                    <br/>
                    <p>Personal information subject to this Privacy Policy will be collected and retained by Sy No. 39/1, Pattanagere Road, near RV Engineering College, Next to Global Academy for Learning School, Mysore Road, Bangalore-560059.</p>
                    <br/>
                    <p>This Privacy Policy is incorporated into and subject to the Terms of Use.</p>
                    <br/>
                    <p>Collection of Personal Information and other Information when you use our Website, we collect and store your personal information which is provided by you from time to time. Our primary goal in doing so is to provide you with a safe, efficient, smooth and customized experience.This allows us to provide services and features that most likely meet your needs, and to customize our Website to make your experience safer and easier. More importantly, while doing so we collect personal information from you that we consider necessary for achieving this purpose. </p>
                    <br/>
                    <p>If you choose to buy on the Website, we collect information about your buying behaviour. If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities or postings on the Website, we may collect such information into a file specific to you. </p>
                    <br/>
                    <p>We collect your personal information email address, name, phone number, etc.. from you when you set up an account with us. While you can browse some sections of our Website without being a registered member, certain activities such as placing an order. do require registration. We do use your contact information to send you offers based on your previous orders and your interests. </p>
                    <br/>
                    <p>if you no longer desire our service, you may correct, update, or delete it by emailing our Customer Support at support@calibreply.com</p>
                    <br/>
                    <p><b>Special Offers and Updates</b></p>
                    <br/>
                    <p>We may occasionally send you information on products, services, special deals, and promotions. Out of respect for your privacy, we present the option not to receive these types of communications, Press Releases and Newsletters. </p>
                    <br/>
                    <p>If you request to receive our press releases. or newsletters., we will use your name and email address to send these documents to you. We respect your privacy and you can contact us at support@calibreply.com if you subsequently wish to be removed from this mailing list. </p>
                    <br/>
                    <p><b>Service-related Announcements</b></p>
                    <br/>
                    <p>We will send you strictly service-related announcements on rare occasions when it is necessary to do so. For instance, if our service is temporarily suspended for maintenance, we might send you an email advising you of this</p>
                    <br/>
                    <p><b>Legal Disclaimer</b></p>
                    <br/>
                    <p><b>Browsing Information:</b> We may automatically track certain information about you based on your use of our Website. We use this information to do internal research on our users&apos; demographics, interests, and buying and browsing behavior to better understand, protect and serve our users. This information is compiled and analyzed on an aggregate basis. This information may include the URL that you just came from whether this URL is on our Website or not., the URL you go next to whether this URL is on our Website or not., your computer browser information, your location, your mobile device, including a unique identifier for your device and your IP address. If you choose to buy on the Website we collect information about your buying behavior, preferences, and other such information that you choose to provide.</p>
                    <br/>
                    <p>The website shall be used by individuals over 18 years of age or minors with the supervision of an adult. Transaction Information: If you transact with us, we collect some additional information, such as a billing address, a credit/debit card number and a credit/debit card expiration date and/ or other payment instrument details and tracking information from cheques or money orders. </p>
                    <br/>
                    <p><b>Sharing of your information</b></p>
                    <br/>
                    <p>We may share your information with the following recipients:</p>
                    <br/>
                    <p>1. To our third-party service providers who perform certain business-related functions for us, such as website hosting, data analysis, payment and credit card processing, infrastructure provision, IT services, customer support service, e-mail delivery services, and other similar services to enable them to provide services to us. </p>
                    <br/>
                    <p>2. To our customers, sellers and other business partners who provide you, directly or indirectly, with your devices, and/or networks and systems through which you access and use our Website and services. </p>
                    <p>3. As we believe to be necessary or appropriate: a. to comply with applicable laws and regulations; b. required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, investigations, law enforcement offices, third party rights owners, credit risk reduction, and requests from public and government authorities, including public and government authorities outside your country of residence; c. to enforce our terms and conditions; d. to protect our operations, business and systems; e. to protect our rights, privacy, safety or property, and/or that of other users, including you; and f. to allow us to pursue available remedies or limit the damages that we may sustain. </p>
                    <p>4. To our subsidiaries or affiliates within our corporate family, to carry out regular business activities. These entities and affiliates may market to you as a result of such sharing unless you explicitly opt out. </p>
                    <p>5. To our financing partner to determine your eligibility and/or modify your credit limit when you apply for loan products or business financing options. The link for the same can be accessed here. </p>
                    <p>6. We may share or sell your information to an affiliate or other third party in the event of any reorganization, merger, sale, joint venture, assignment, business transfer or other disposition of all or any portion of our business, assets or stock including without limitation in connection with any bankruptcy or similar proceedings.. In such an event, you will be notified via email and/or a prominent notice on our Website of any change in ownership. </p>
                    <p><b>Cookies</b></p>
                    <p>To personalize your shopping experience, we use cookies on this site. A cookie is a small text file that is stored on a user&apos;s computer for record-keeping purposes. Clear Gifs Web Beacons/Web Bugs. we do not use clear gifs i.e. Web Beacons/Web Bugs. in our HTML-based emails. Clear gifs are tiny graphics with a unique identifier, similar in function to cookies, and are used to track the online movements of Web users and to let companies know which emails recipients have opened, allowing them to gauge the effectiveness of certain communications and the effectiveness of their online marketing campaigns. In contrast to cookies, which are stored on a user&apos;s computer hard drive, clear gifs are embedded invisibly on Web pages and are about the size of the period at the end of this sentence.</p>
                    <p><b>Links to Other Sites</b></p>
                    <p>Our Website links to other websites that may collect personally identifiable information about you. Ecogen Industries is not responsible for the privacy practices or the content of those linked websites. </p>
                    <p><b>Advertisements on Ecogen Industries</b></p>
                    <p>We use third-party advertising companies to serve ads when you visit our Website. These companies may use information not including your name, address, email address, or telephone number. about your visits to this and other websites in order to provide advertisements about goods and services of interest to you. Security </p>
                    <p>The security of your personal information is important to us. We do not use any encryption on our forms, as we do not collect credit card numbers, social security numbers or any other sensitive information that can be used in identity theft. Business Transitions</p>
                    <p>In the event Ecogen Industries goes through a business transition, such as a merger, acquisition by another company, or sale of all or a portion of its assets, your personally identifiable information will be among the assets transferred but remain subject to the promise made in the pre-existing privacy policy. </p>
                    <p><b>Amendment of this Privacy Statement </b></p>
                    <p>If we decide to amend our privacy policy, we will post those changes to this privacy statement on the homepage and other places we deem appropriate so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. </p>
                    <p>We reserve the right to modify this privacy statement at any time, so please review it periodically. If we make material changes to this policy, we will notify you here, by email, or by means of a notice on our home page. </p>
                    <br/>
                    <p><b>Legal Act against Fraudulent use of CALIBRE PLY &amp; LAMINATE</b></p>
                    <p>Displaying/showcasing lower price of any CALIBRE PLYWOOD AND LAMINATE in any platform other than our own websites <a href="https://www.calibreply.com/">www.calibreply.com</a> &amp; <a href="http://www.dvonnply.com/">www.dvonnply.com</a>.&gt; without any legitimate permission from original product supplier Ecogen Industries. consider as <b>ILLEGAL</b></p>
                    <br/>
                    <p>Legal Action will be taken under the consumer protection e-commerce. rules of 2020 against those who use CALIBRE PLYWOOD AND LAMINATE images/documentation/price in any other form of platforms. </p>
                    <br/>
                    <p><b>Grievance Officer</b></p>
                    <p>In accordance with Information Technology Act 2000 and the rules made there under, the name and contact details of the Grievance Officer are provided below: </p>
                    <p><b>Name: </b>Mr Manjunath</p>
                    <p><b>Mobile Number: </b><Link href='tel:95919 99451'>+91 95919 99451</Link> </p>
                    <p><b>ID : </b><Link href='mailto:support@calibreply.com'>support@calibreply.com</Link> </p>
                    </div>
                </div>
            </div>
        </section>
    </section>

    <Footer/>
    </>
  )
}

export default Privacy