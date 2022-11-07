
var mybutton = document.getElementById("Return_Top_Button");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function Return_To_Top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Changes bike picture and information according to which picture/slide the user clicks on.
function magnets() {
	document.getElementById("ChosenArticleInfo").innerHTML = "Using a simple set of magnets, MIT researchers have come up with a sophisticated way to monitor muscle movements, which they hope will make it easier for people with amputations to control their prosthetic limbs. In a new pair of papers, the researchers demonstrated the accuracy and safety of their magnet-based system, which can track the length of muscles during movement. The studies, performed in animals, offer hope that this strategy could be used to help people with prosthetic devices control them in a way that more closely mimics natural limb movement. 'These recent results demonstrate that this tool can be used outside the lab to track muscle movement during natural activity, and they also suggest that the magnetic implants are stable and biocompatible and that they don’t cause discomfort,' says Cameron Taylor, an MIT research scientist and co-lead author of both papers. In one of the studies, the researchers showed that they could accurately measure the lengths of turkeys’ calf muscles as the birds ran, jumped, and performed other natural movements. In the other study, they showed that the small magnetic beads used for the measurements do not cause inflammation or other adverse effects when implanted in muscle.";
	document.getElementById("ChosenImage").src="MEDIA/tweezers.jpg";
	document.getElementById("ChosenHeading").innerHTML="Magnetic sensors track muscle length";
}

function cubes() {
	document.getElementById("ChosenArticleInfo").innerHTML = "While automated manufacturing is ubiquitous today, it was once a nascent field birthed by inventors such as Oliver Evans, who is credited with creating the first fully automated industrial process, in flour mill he built and gradually automated in the late 1700s. The processes for creating automated structures or machines are still very top-down, requiring humans, factories, or robots to do the assembling and making.  However, the way nature does assembly is ubiquitously bottom-up; animals and plants are self-assembled at a cellular level, relying on proteins to self-fold into target geometries that encode all the different functions that keep us ticking. For a more bio-inspired, bottom-up approach to assembly, then, human-architected materials need to do better on their own. Making them scalable, selective, and reprogrammable in a way that could mimic nature’s versatility means some teething problems, though.  Now, researchers from MIT’s Computer Science and Artificial Intelligence Laboratory (CSAIL) have attempted to get over these growing pains with a new method: introducing magnetically reprogrammable materials that they coat different parts with — like robotic cubes — to let them self-assemble. Key to their process is a way to make these magnetic programs highly selective about what they connect with, enabling robust self-assembly into specific shapes and chosen configurations. ";
	document.getElementById("ChosenImage").src="MEDIA/cubes.png";
	document.getElementById("ChosenHeading").innerHTML="Reprogrammable materials selectively self-assemble";
}

function particles() {
	document.getElementById("ChosenArticleInfo").innerHTML = "Taking advantage of a phenomenon known as emergent behavior in the microscale, MIT engineers have designed simple microparticles that can collectively generate complex behavior, much the same way that a colony of ants can dig tunnels or collect food. Working together, the microparticles can generate a beating clock that oscillates at a very low frequency. These oscillations can then be harnessed to power tiny robotic devices, the researchers showed. “In addition to being interesting from a physics point of view, this behavior can also be translated into an on-board oscillatory electrical signal, which can be very powerful in microrobotic autonomy. There are a lot of electrical components that require such an oscillatory input,” says Jingfan Yang, a recent MIT PhD recipient and one of the lead authors of the new study.";
	document.getElementById("ChosenImage").src="MEDIA/particles.jpg";
	document.getElementById("ChosenHeading").innerHTML="Tiny particles work together to do big things";
}

function pills() {
	document.getElementById("ChosenArticleInfo").innerHTML = "One reason that it’s so difficult to deliver large protein drugs orally is that these drugs can’t pass through the mucus barrier that lines the digestive tract. This means that insulin and most other “biologic drugs” — drugs consisting of proteins or nucleic acids — have to be injected or administered in a hospital.  A new drug capsule developed at MIT may one day be able to replace those injections. The capsule has a robotic cap that spins and tunnels through the mucus barrier when it reaches the small intestine, allowing drugs carried by the capsule to pass into cells lining the intestine. “By displacing the mucus, we can maximize the dispersion of the drug within a local area and enhance the absorption of both small molecules and macromolecules,” says Giovanni Traverso, the Karl van Tassel Career Development Assistant Professor of Mechanical Engineering at MIT and a gastroenterologist at Brigham and Women’s Hospital.";
	document.getElementById("ChosenImage").src="MEDIA/pills.jpg";
	document.getElementById("ChosenHeading").innerHTML="Breaking through the mucus barrier";
}

function battery() {
	document.getElementById("ChosenArticleInfo").innerHTML = "Scientists estimate that more than 95 percent of Earth’s oceans have never been observed, which means we have seen less of our planet’s ocean than we have the far side of the moon or the surface of Mars. The high cost of powering an underwater camera for a long time, by tethering it to a research vessel or sending a ship to recharge its batteries, is a steep challenge preventing widespread undersea exploration. MIT researchers have taken a major step to overcome this problem by developing a battery-free, wireless underwater camera that is about 100,000 times more energy-efficient than other undersea cameras. The device takes color photos, even in dark underwater environments, and transmits image data wirelessly through the water.";
	document.getElementById("ChosenImage").src="MEDIA/battery.jpg";
	document.getElementById("ChosenHeading").innerHTML="MIT engineers build a battery-free, wireless underwater camera";
}


span.onclick = function() {
  modal.style.display = "none";
}

