//This is the title for your window tab, and your Radar
document.title = "Rafael Souza's Technology Radar (Jan 2015)";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Study'}
                  ,{'r':200,'name':'Test'}
                  ,{'r':300,'name':'Map'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// "movement":
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// "pc": polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adop"t": blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1800;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
          {"name":"Requirements Engineering", "pc": {"r": 20, "t": 145}, "movement": "c" }, 
          {"name":" Lean Architecture", "pc": {"r": 40, "t": 105}, "movement": "c" }, 
          {"name":"SOA", "pc": {"r": 60, "t": 170}, "movement": "c" }, 
          {"name":"Functional Programming", "pc": {"r": 80, "t": 120}, "movement": "c" }, 
          {"name":"Interprise Integration Patterns", "pc": {"r": 120, "t": 130}, "movement": "c" }, 
          {"name":"Microservices", "pc": {"r": 210, "t": 130}, "movement": "c" }
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [
          {"name":"Sublime Text", "pc": {"r": 30, "t": 45}, "movement": "c" },
          {"name":"Vagrant", "pc": {"r": 120, "t": 60}, "movement": "c" },  
          {"name":"Docker", "pc": {"r": 210, "t": 60}, "movement": "c" },  
          {"name":"Chef", "pc": {"r": 240, "t": 80}, "movement": "c" },  
          {"name":"Puppet", "pc": {"r": 260, "t": 40}, "movement": "c" }
        ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
          {"name":"Java 8", "pc": {"r": 25, "t": 225}, "movement": "c" },  
          {"name":"JEE", "pc": {"r": 55, "t": 225}, "movement": "c" },  
          {"name":"Amazon AWS", "pc": {"r": 130, "t": 240}, "movement": "c" },  
          {"name":"Google Cloud", "pc": {"r": 240, "t": 235}, "movement": "c" },  
          {"name":"Spark", "pc": {"r": 235, "t": 245}, "movement": "c" }
        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [
          {"name":"Scala", "pc": {"r": 25, "t": 315}, "movement": "c" }, 
          {"name":"Play", "pc": {"r": 80, "t": 325}, "movement": "c" }, 
          {"name":"Java 8", "pc": {"r": 120, "t": 320}, "movement": "c" }, 
          {"name":"Haskel", "pc": {"r": 230, "t": 340}, "movement": "c" },
          {"name":"Flight.js", "pc": {"r": 220, "t": 310}, "movement": "c", url:"https://flightjs.github.io/" }, 
          {"name":"SPF (Structured Page Fragments)", "pc": {"r": 250, "t": 335}, "movement": "c", url:"https://github.com/youtube/spfjs"}, 
          {"name":"Akka", "pc": {"r": 209, "t": 330}, "movement": "c", url:"http://akka.io/"}, 
          {"name":"Ruby", "pc": {"r": 350, "t": 320}, "movement": "c"}, 
          {"name":"Ruby on Rails", "pc": {"r": 380, "t": 300}, "movement": "c"}
        ]
    }
];
