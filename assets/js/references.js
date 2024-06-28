/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1 : "Web Development",
        designation1 : "",
        image1 : "assets/images/references-page/web.jpeg",
        message1 : "My projects demonstrate proficiency in utilizing a diverse set of modern technology tools in web development. I have worked on numerous full-stack projects, leveraging technologies such as React, HTML, CSS, JavaScript, Bootstrap, Node.js, Express, and Next.js. I have also used various npm packages extensively, showcasing my solid experience and expertise with these and other web technologies..",
        

        sl2:2,
        name2 : "Penetration testing and Ethical Hacking",
        designation2 : "", 
        image2: "assets/images/techstack-page/hck.jpeg",
        message2 : "My projects showcase my ability to conduct thorough penetration tests using advanced tools and techniques. I have utilized technologies such as Kali Linux, Nmap, Wireshark, Bettercap, Metasploit, Nessus, SQLmap, Burp Suite, Acunetix, OWASP ZAP, and Nikto, demonstrating my extensive experience and proficiency in ethical hacking and penetration testing.",
        
        
    },

    {
        sl1:3,
        name1 : "Python Programming",
        designation1 : "",
        image1 : "assets/images/techstack-page/python.png",
        message1 : "My projects highlight my skills in Python programming, ranging from developing automation scripts to building complex applications like network packet sniffers, Python snake games, encryption tools, and more..",
        

        sl2:4,
        name2 : "Java development",
        designation2 : "",
        image2 : "assets/images/techstack-page/java.png",
        message2 : "My projects in Java development showcase my expertise in building robust applications, focusing on both backend systems and interactive user interfaces.. He offered sincere help to the team throughout the competition. He is an impressive problem solver who is able to address complex issues strategically and confidently.",
  },

  {
 sl1: 5,
    name1 : "Database management",
        designation1 : "",
        image1 : "assets/images/techstack-page/dbms.png",
        message1 : "My projects in database management systems (DBMS) highlight my proficiency in designing and optimizing databases, ensuring efficient data storage, retrieval, and security. I have worked extensively with MongoDB, MySQL, and PostgreSQL, including utilizing PostgreSQL in projects like Vidly, showcasing my practical experience with these technologies..",
sl2: 6,
    name2 : "UX Designing",
        designation2 : "",
        image2 : "assets/images/techstack-page/design.jpeg",
        message2 : "My UX design projects focus on creating intuitive and visually appealing interfaces, ensuring a seamless user experience through user-centered design principles and innovative solutions.",

  },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
