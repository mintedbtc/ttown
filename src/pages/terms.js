import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import "../assets/css/main.css";

const TermsPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
      
      <div className="uk-section">
        <div className="uk-center uk-width-2-3" style={{marginLeft:"16.67%"}}>
        <h4 style={{textAlign:"center",color:"#000000"}}>Terms of Use Agreement</h4>
            <p style={{color:"#000000"}}>NWA Daily, LLC Terms of Use</p>
            <p style={{color:"#000000"}}>Effective as of January 1, 2021</p>
            <br></br>
            <p style={{color:"#000000"}}>Thank you for visiting www.northwestarkansasdaily.com, a regional media destination for news and information. NWA Daily (“NWA Daily”, “we”, “us” and “our”) operates websites (each a “Site”) and services made available through the Sites (collectively, the Site, the Mobile Application, and such services, are referred to as the “Services”). Certain features of the Services may be subject to additional guidelines, terms, or rules, which will be posted in the Services in connection with such features. All such additional terms, guidelines, and rules are incorporated by reference into this Agreement.</p>
            <br></br>
            <p style={{color:"#000000"}}>This Terms of Use Agreement (“Agreement”) sets forth the legally binding terms for your use of the Services whether you are simply a “Visitor” (which means you are just browsing the Services), or an “Authorized User”, which means you have registered to use them. Collectively, Visitors and Authorized Users are referred to as “Users” or individually as a “User” or “you”. By accessing or using the Services, clicking on the “I accept” button, typing/clicking on the website, and/or opening our newsletter, you are accepting this Agreement (on behalf of yourself or the entity that you represent) and you represent and warrant that you have the right, authority, and capacity to enter into this Agreement (on behalf of yourself or the entity that you represent). you may not access or use the Services or accept the Agreement if you are not at least 18 years old. If you do not agree with all of the provisions of this Agreement, do not access and/or use the Services.</p>
            <br></br>
            <p style={{color:"#000000"}}>Please review the following terms carefully. By accessing or using the Service, you signify your agreement to these Terms of Use. <strong>If you do not agree to be bound by these Terms of Use in their entirety, you may not access or use the Service.</strong></p>
            <br></br>
            <h4 style={{textAlign:"center",color:"#000000"}}>Privacy Policy</h4>
            <br></br>
            <p style={{color:"#000000"}}>The Company respects the privacy of its Service users. Please refer to the Company’s Privacy Policy (found here: <a href="/privacy">{"Privacy Policy"}</a>) which explains how we collect, use, and disclose information that pertains to your privacy. When you access or use the Service, you signify your agreement to the Privacy Policy as well as these Terms of Use.</p>
            <h4 style={{textAlign:"center",color:"#000000"}}>About the Service</h4>
            <br></br>
            <p style={{color:"#000000"}}>The Service allows you to keep up to date on the local news, events, and happenings in the Northwest Arkansas region.</p>
            <h4 style={{textAlign:"center",color:"#000000"}}>Registration; Rules for User Conduct And Use Of The Service</h4>
            <br></br>
            <p style={{color:"#000000"}}>The Service allows you to keep up to date on the local news, events, and happenings in the Northwest Arkansas region.</p>
            <h4 style={{textAlign:"center",color:"#000000"}}>Use Restrictions</h4>
            <br></br>
            <p style={{color:"#000000"}}>Your permission to use the Site is conditioned upon the following use, posting and conduct restrictions: You agree that you will not under any circumstances:</p>
            <ul>
            <li style={{color:"#000000"}}>access the Service for any reason other than your personal, non-commercial use solely as permitted by the normal functionality of the Service;</li>
            <li style={{color:"#000000"}}>collect or harvest any personal data of any user of the Site or the Service; </li>
            <li style={{color:"#000000"}}>use the Site or the Service for the solicitation of business in the course of trade or in connection with a commercial enterprise;</li>
            <li style={{color:"#000000"}}>distribute any part or parts of the Site or the Service without our explicit written permission (we grant the operators of public search engines permission to use spiders to copy materials from the site for the sole purpose of creating publicly-available searchable indices but retain the right to revoke this permission at any time on a general or specific basis);</li>
            <li style={{color:"#000000"}}>use the Service for any unlawful purpose or for the promotion of illegal activities;</li>
            <li style={{color:"#000000"}}>attempt to, or harass, abuse or harm another person or group;</li>
            <li style={{color:"#000000"}}>interfere or attempt to interfere with the proper functioning of the Service;</li>
            <li style={{color:"#000000"}}>make any automated use of the Site, the Service or the related systems, or take any action that we deem to impose or to potentially impose an unreasonable or disproportionately large load on our servers or network infrastructure;</li>
            <li style={{color:"#000000"}}>bypass any robot exclusion headers or other measures we take to restrict access to the Service, or use any software, technology, or device to scrape, spider, or crawl the Service or harvest or manipulate data; </li>
            <li style={{color:"#000000"}}>circumvent, disable or otherwise interfere with any security-related features of the Service or features that prevent or restrict use or copying of content, or enforce limitations on use of the Service or the content accessible via the Service; or </li>
            <li style={{color:"#000000"}}>publish or link to malicious content of any sort, including that intended to damage or disrupt another user’s browser or computer.</li>
            </ul>
            <h4 style={{textAlign:"center",color:"#000000"}}>Online Content Disclaimer</h4>
            <p style={{color:"#000000"}}>Opinions, advice, statements, offers, or other information or content made available through the Service, but not directly by the Site, are those of their respective authors, and should not necessarily be relied upon. Such authors are solely responsible for such content. </p>
            <br></br>
            <p style={{color:"#000000"}}>We do not guarantee the accuracy, completeness, or usefulness of any information on the Site or the Service nor do we adopt nor endorse, nor are we responsible for, the accuracy or reliability of any opinion, advice, or statement made by other parties. We take no responsibility and assume no liability for any User Content that you or any other user or third party posts or sends via the Service. Under no circumstances will we be responsible for any loss or damage resulting from anyone’s reliance on information or other content posted on the Service, or transmitted to users. Though we strive to enforce these Terms of Use, you may be exposed to User Content that is inaccurate or objectionable when you use or access the Site or the Service. We reserve the right, but have no obligation, to monitor the materials posted in the public areas of the Site or the Service or to limit or deny a user’s access to the Service or take other appropriate action if a user violates these Terms of Use or engages in any activity that violates the rights of any person or entity or which we deem unlawful, offensive, abusive, harmful or malicious.  The Company shall have the right to remove any material that in its sole opinion violates, or is alleged to violate, the law or this agreement or which might be offensive, or that might violate the rights, harm, or threaten the safety of users or others.  Unauthorized use may result in criminal and/or civil prosecution under Federal, State and local law. If you become aware of a misuse of our Service or violation of these Terms of Use, please contact us crew@northwestarkansasdaily.com. </p>
            <br></br>
            <h4 style={{textAlign:"center",color:"#000000"}}>Links to Other Sites And/Or Materials</h4>
            <p style={{color:"#000000"}}>As part of the Service, we may provide you with convenient links to third party website(s) (“Third Party Sites”) as well as content or items belonging to or originating from third parties (the “Third Party Applications, Software or Content”). These links are provided as a courtesy to Service subscribers. We have no control over Third Party Sites or Third Party Applications, Software or Content or the promotions, materials, information, goods or services available on these Third Party Sites or Third Party Applications, Software or Content. Such Third Party Sites and Third Party Applications, Software or Content are not investigated, monitored or checked for accuracy, appropriateness, or completeness, and we are not responsible for any Third Party Sites accessed through the Site or any Third Party Applications, Software or Content posted on, available through or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices or other policies of or contained in the Third Party Sites or the Third Party Applications, Software or Content. Inclusion of, linking to or permitting the use or installation of any Third Party Site or any Third Party Applications, Software or Content does not imply our approval or endorsement. If you decide to leave the Site and access the Third Party Sites or to use or install any Third Party Applications, Software or Content, you do so at your own risk and you should be aware that our terms and policies, including these Terms of Use, no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any Third Party Site to which you navigate from the Site or relating to any applications you use or install from the Third Party Site.</p>
            <br></br>
            <h4 style={{textAlign:"center",color:"#000000"}}>Copyright Complaints and Copyright Agent</h4>
            <ul>
            <li style={{color:"#000000"}}>Termination of Repeat Infringer Accounts. We respect the intellectual property rights of others and require that the users do the same. Pursuant to 17 U.S.C. 512(i) of the United States Copyright Act, we have adopted and implemented a policy that provides for the termination in appropriate circumstances of users of the Service who are repeat infringers. </li>
            <li style={{color:"#000000"}}>DMCA Take-Down Notices.  If you are a copyright owner or an agent thereof and believe, in good faith, that any materials provided on the Service infringe upon your copyrights, you may submit a notification pursuant to the Digital Millennium Copyright Act (see 17 U.S.C 512) (“DMCA”) by sending the following information in writing to the our designated copyright agent at PO Box 8061, Fayetteville, AR 72703:</li>
              <ul>
              <li style={{color:"#000000"}}>The date of your notification;</li>
              <li style={{color:"#000000"}}>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</li>
              <li style={{color:"#000000"}}>A description of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site;</li>
              <li style={{color:"#000000"}}>A description of the material that is claimed to be infringing or to be the subject of infringing activity and information sufficient to enable us to locate such work;</li>
              <li style={{color:"#000000"}}>Information reasonably sufficient to permit the service provider to contact you, such as an address, telephone number, and/or email address;</li>
              <li style={{color:"#000000"}}>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and</li>
              <li style={{color:"#000000"}}>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
              </ul>
            </ul>
            <br></br>
            <h4 style={{textAlign:"center",color:"#000000"}}>Intellectual Property</h4>
            <p style={{color:"#000000"}}>If you think we have published an image or text that infringes your copyright, we will address your concerns; however, if the image falls into one of the categories listed above, we believe that our use of the image is legitimate and we will not remove it from the site. Please note that we will respond only to notices of alleged infringement that comply with the Digital Millennium Copyright Act. The text of the Act can be found at the U.S. Copyright Office website, http://lcWeb.loc.gov/copyright/.</p>
            <br></br>
            <p style={{color:"#000000"}}>To file a notice of infringement with us, you must provide a written communication (by email or mail) that sets forth the items specified below. Please do not send us regular mail, as we may not receive it in a timely fashion.  To enable us to address your concerns, please provide the following information:  For each allegedly infringing image or piece of text that you wish to have removed from one of our sites, provide the exact permanent URL for the page containing the material.  Provide information reasonably sufficient to permit us to contact you: an email address is preferred, as well as a telephone contact number.  </p>
            <br></br>
            <p style={{color:"#000000"}}>Provide the following information detailing your claim to ownership of the copyright in the allegedly infringing material:  Proof of copyright in the image or text concerned, namely proof of registration of the Image under the DMCA, OR, (absent such registration) a detailed description of where the photograph was taken, by whom, who or what the subject of the image is, AND Evidence to support your claim that you own the copyright in the image.  We will not comply with requests to remove an image where the complainant cannot prove that they own the copyright in the image in question.</p>
            <br></br>
            <p style={{color:"#000000"}}>Include the following statement: “I swear, under penalty of perjury, that the information in the notification is accurate and that I am the copyright owner or am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.”</p>
            <br></br>
            <p style={{color:"#000000"}}>Sign and email crew@northwestarkansasdaily.com or mail to Attn: NWA Daily, LLC, PO Box 8061, Fayetteville, AR 72703. </p>
            <br></br>
            <h4 style={{textAlign:"center",color:"#000000"}}>Email May Not Be Used To Provide Notice</h4>
            <p style={{color:"#000000"}}>Communications made through the Service’s email and messaging system will not constitute legal notice to the Site, the Service, or any of its officers, employees, agents or representatives in any situation where legal notice is required by contract or any law or regulation.</p>
            <br></br>
            <h4 style={{textAlign:"center",color:"#000000"}}>User Consent To Receive Communications In Electronic Form</h4>
            <p style={{color:"#000000"}}>For contractual purposes, you: (a) consent to receive communications from us in an electronic form via the email address you have submitted; and (b) agree that all Terms of Use, agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications would satisfy if it were in writing. The foregoing does not affect your non-waivable rights.</p>
            <br></br>
            <p style={{color:"#000000"}}>We may also use your email address to send you other messages, including information about the Site or the Service and special offers. You may opt out of such email by changing your account settings, using the “Unsubscribe” link in the message, or by sending an email to crew@northwestarkansasdaily.com or mail to the following postal address:</p>
            <br></br>
            <p style={{color:"#000000"}}>Attn: NWA Daily, LLC</p>
            <p style={{color:"#000000"}}>PO Box 8061</p>
            <p style={{color:"#000000"}}>Fayetteville, AR 72703</p>
            <br></br>
            <p style={{color:"#000000"}}>Opting out will prevent you from receiving messages regarding the Site, the Service, or special offers.</p>
            <br></br>
            <h4 style={{textAlign:"center",color:"#000000"}}>WARRANTY DISCLAIMER</h4>
            <p style={{color:"#000000"}}>THE SERVICE, IS PROVIDED “AS IS,” WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, WE EXPRESSLY DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED OR STATUTORY, REGARDING THE SERVICE INCLUDING WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, SECURITY, ACCURACY AND NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, WE MAKE NO WARRANTY OR REPRESENTATION THAT ACCESS TO OR OPERATION OF THE SERVICE WILL BE UNINTERRUPTED OR ERROR FREE. YOU ASSUME FULL RESPONSIBILITY AND RISK OF LOSS RESULTING FROM YOUR DOWNLOADING AND/OR USE OF FILES, INFORMATION, CONTENT OR OTHER MATERIAL OBTAINED FROM THE SERVICE. SOME JURISDICTIONS LIMIT OR DO NOT PERMIT DISCLAIMERS OF WARRANTY, SO THIS PROVISION MAY NOT APPLY TO YOU.</p>
            <br></br>
            <h4 style={{textAlign:"center",color:"#000000"}}>LIMITATION OF DAMAGES; RELEASE</h4>
            <p style={{color:"#000000"}}>TO THE EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE SITE, THE SERVICE, ITS AFFILIATES, DIRECTORS, OR EMPLOYEES, OR ITS LICENSORS OR PARTNERS, BE LIABLE TO YOU FOR ANY LOSS OF PROFITS, USE,  OR DATA, OR FOR ANY INCIDENTAL, INDIRECT, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, HOWEVER ARISING, THAT RESULT FROM: (A) THE USE, DISCLOSURE, OR DISPLAY OF YOUR USER CONTENT; (B) YOUR USE OR INABILITY TO USE THE SERVICE; (C) THE SERVICE GENERALLY OR THE SOFTWARE OR SYSTEMS THAT MAKE THE SERVICE AVAILABLE; OR (D) ANY OTHER INTERACTIONS WITH USE OR WITH ANY OTHER USER OF THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS LIMIT OR DO NOT PERMIT DISCLAIMERS OF LIABILITY, SO THIS PROVISION MAY NOT APPLY TO YOU.</p>
            <br></br>
            <p style={{color:"#000000"}}>If you have a dispute with one or more users of a product or service that you review using the Service, you release us (and our officers, directors, agents, subsidiaries, joint ventures and employees) from claims, demands and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such disputes. If you are a California resident using the Service, you may specifically waive California Civil Code §1542, which says: “A general release does not extend to claims which the creditor does not know or suspect to exist in his favor at the time of executing the release, which if known by him must have materially affected his settlement with the debtor.”</p>
            <br></br>
            <h4 style={{textAlign:"center",color:"#000000"}}>Modification of Terms of Use</h4>
            <p style={{color:"#000000"}}>We can amend these Terms of Use at any time and will update these Terms of Use in the event of any such amendments. It is your sole responsibility to check the Site from time to time to view any such changes in this agreement. Your continued use of the Site or the Service signifies your agreement to our revisions to these Terms of Use. We will endeavor to notify you of material changes to the Terms by posting a notice on our homepage and/or sending an email to the email address you provided to us upon registration. For this additional reason, you should keep your contact and profile information current. Any changes to these Terms (other than as set forth in this paragraph) or waiver of our rights hereunder shall not be valid or effective except in a written agreement bearing the physical signature of one of our officers. No purported waiver or modification of this agreement on our part via telephonic or email communications shall be valid.</p>
            <br></br>
            <h4 style={{textAlign:"center",color:"#000000"}}>General Terms</h4>
            <p style={{color:"#000000"}}>If any part of this Terms of Use agreement is held or found to be invalid or unenforceable, that portion of the agreement will be construed as to be consistent with applicable law while the remaining portions of the agreement will remain in full force and effect. Any failure on our part to enforce any provision of this agreement will not be considered a waiver of our right to enforce such provision. Our rights under this agreement survive any transfer or termination of this agreement.</p>
            <br></br>
            <p style={{color:"#000000"}}>These Terms of Use and your use of the Site are governed by the federal laws of the United States of America and the laws of the State of Arkansas, without regard to conflict of law provisions.</p>
            <br></br>
            <p style={{color:"#000000"}}>We may assign or delegate these Terms of Service and/or our Privacy Policy, in whole or in part, to any person or entity at any time with or without your consent. You may not assign or delegate any rights or obligations under the Terms of Service or Privacy Policy without our prior written consent, and any unauthorized assignment or delegation by you is void.</p>
            <br></br>
            <p style={{color:"#000000"}}>YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF USE, UNDERSTAND THE TERMS OF USE, AND WILL BE BOUND BY THESE TERMS AND CONDITIONS. YOU FURTHER ACKNOWLEDGE THAT THESE TERMS OF USE TOGETHER WITH THE PRIVACY POLICY AT <a href="/privacy">{"PRIVACY POLICY"}</a> REPRESENT THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN US AND THAT IT SUPERSEDES ANY PROPOSAL OR PRIOR AGREEMENT ORAL OR WRITTEN, AND ANY OTHER COMMUNICATIONS BETWEEN US RELATING TO THE SUBJECT MATTER OF THIS AGREEMENT.</p>
            </div>
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
  }
`;

export default TermsPage;