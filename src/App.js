import React, { useState } from "react";
import "./App.css";

// Добавяме линкове за снимки към въпросите
const questions = [
  { 
    question: "Was ist das offizielle Motto Deutschlands?", 
    options: ["Einigkeit und Recht und Freiheit", "Arbeit macht frei", "Gott mit uns", "Deutschland über alles"], 
    correct: 0, 
    hint: "Dieses Motto ist ein wichtiger Bestandteil des deutschen Nationalhymne.",
    image: "https://m.media-amazon.com/images/I/61IygyJQndL.__AC_SY445_SX342_QL70_ML2_.jpg" // Добавена снимка
  },
  { 
    question: "Welche deutsche Stadt ist als „Stadt der Wissenschaft“ wegen ihrer Universitäten bekannt?", 
    options: ["Heidelberg", "Frankfurt", "Dresden", "Göttingen"], 
    correct: 3, 
    hint: "In dieser Stadt wurde der erste Nobelpreis für Physik verliehen.",
    image: "https://img.zeit.de/wissen/2020-10/nobelpreis-physik-2020-preistraeger-verkuendung-livestream-bild/wide__1300x731" // Добавена снимка
  },
  { 
    question: "Was ist „Neuschwanstein“?", 
    options: ["Eine große deutsche Porzellanfabrik", "Die größte deutsche Universität", "Ein Schloss, das Disney inspiriert hat ", "Ein historischer Markt in Berlin"], 
    correct: 2, 
    hint: "Dieser Ort ist ein beliebtes Touristenziel und steht inmitten einer beeindruckenden Berglandschaft, die oft als Kulisse für Filme und Geschichten dient.",
    image: "https://th.bing.com/th/id/R.3bee6002c2c797c664ac18d760fdb66e?rik=E3WWJlfmJC5Btg&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1492252%2foriginal.jpg&ehk=GGH4nGYoQIcvMKW3GNl2OpAsV5sc%2fHuUPh6SSessPs8%3d&risl=1&pid=ImgRaw&r=0" // Добавена снимка
  },
  { 
    question: "Welche ist die höchste Kathedrale in Deutschland?", 
    options: ["Der Kölner Dom", "Das Ulmer Münster", "Das Freiburger Münster", "Die Dresdner Frauenkirche"], 
    correct: 1, 
    hint: "Diese Kathedrale ist berühmt für ihre beeindruckenden Glasfenster und ihre Geschichte, die bis ins Mittelalter zurückreicht.",
    image: "https://img.fotocommunity.com/ulmer-muenster-f68228da-e64e-4103-aeea-2e580bb715d8.jpg?height=1080" // Добавена снимка
  },
  { 
    question: "Was ist die Hauptattraktion auf der Museumsinsel im Neuen Museum in Berlin?", 
    options: ["Der Pergamonaltar", "Der Goldene Thron des Tutanchamun", "Die Büste der Nofretete", "Das Römische Kolosseum"], 
    correct: 2, 
    hint: "Dieses Kunstwerk zeigt das Antlitz einer ägyptischen Königin und ist eines der bekanntesten Exponate der altägyptischen Sammlung in Berlin.",
    image: "https://rp-online.de/imgs/32/1/6/5/6/0/2/0/7/tok_055e7ff6d27c08218aa330d1d13f1707/w940_h528_x470_y264_45654b2614df248e.jpg" // Добавена снимка
  },
  { 
    question: "Was ist das Wattenmeer, das unter dem Schutz der UNESCO steht?", 
    options: ["Die größte Gezeitenzone der Welt", "Ein riesiges Korallenriff in der Nordsee", "Der tiefste See in Deutschland", "Eine vulkanische Zone mit Thermalquellen"], 
    correct: 0, 
    hint: "Diese Landschaft erstreckt sich entlang der Küste und ist bekannt für ihre besonderen Gezeiten, bei denen das Wasser zu bestimmten Zeiten komplett zurückweicht.",
    image: "https://backend.unesco-welterbetag.de/sites/default/files/styles/huge/public/2020-05/Sandbank%20%C2%A9%20Stock%20LKN.SH__0.jpg?itok=JiFfytdS" // Добавена снимка
  },
  { 
    question: "Wie heißt der Mechanismus, durch den der Bundestag den Kanzler nur absetzen kann, wenn er bereit ist, einen neuen zu wählen?", 
    options: ["Misstrauensvotum", "Parlamentarischer Umsturz", "Konstruktives Misstrauensvotum", "Präsidentenveto"], 
    correct: 2, 
    hint: "Dieser Mechanismus erlaubt es dem Parlament, dem Kanzler das Vertrauen zu entziehen, jedoch nur, wenn gleichzeitig ein neuer Kanzler gewählt wird.",
    image: "https://d2wg98g6yh9seo.cloudfront.net/users/211337/211337_PofogoxoboSuSuki7727931275388914.jpg" // Добавена снимка
  },
  { 
    question: "Was bedeutet der Begriff „Verfassungsfeindliche Partei“ im deutschen Recht?", 
    options: ["Eine Partei, die radikale wirtschaftliche Reformen unterstützt", "Eine politische Partei, die gegen die verfassungsmäßige Ordnung handelt und verboten werden kann ", "Eine Partei, die sich weigert, an Wahlen teilzunehmen", "Eine Partei, die nicht im Parlament vertreten ist"], 
    correct: 1, 
    hint: "Diese Art von Organisation stellt eine Bedrohung für die grundlegenden Prinzipien einer Gesellschaft dar, die auf Rechtsstaatlichkeit und demokratischen Werten basiert.",
    image: "https://4.bp.blogspot.com/-qAC9246Y6ZY/WH4_-0o4wfI/AAAAAAAAnDM/pbN3Xhh8kD8rOh_2k6Lp1pzT4dCOSYmHACLcB/s1600/NPD.jpg" // Добавена снимка
  },
  { 
    question: "Welche Rolle spielt der Bundespräsident im deutschen politischen System?", 
    options: ["Exekutive Macht wie der französische Präsident", "Anführer der regierenden Partei", "Leitet die Sitzungen des Bundestages", "Repräsentative Funktion, aber mit dem Recht, den Kanzler zu ernennen"], 
    correct: 3, 
    hint: "Diese Figur ist das Staatsoberhaupt und übernimmt zeremonielle Aufgaben, hat aber auch eine bedeutende Rolle bei der Wahrung der politischen Ordnung und Stabilität im Land.",
    image: "https://www.slpb.de/fileadmin/_processed_/9/5/csm_bpbbundespraesident_797142f768.png" // Добавена снимка
  },
  { 
    question: "Welcher Mechanismus wird in Deutschland angewendet, um das Prinzip des Föderalismus in seinem politischen System umzusetzen?", 
    options: ["Abschaffung der lokalen Behörden", "Jede Region hat eigene gesetzgebende Organe und Befugnisse, die sich nicht in zentrale Entscheidungen einmischen", "Die Macht wird vollständig auf zentraler Ebene verteilt", "Wahlen mit nur einem Kandidaten"], 
    correct: 1, 
    hint: "Aufteilung von Verantwortung, damit nicht alles von einer einzigen Stelle kontrolliert wird.",
    image: "https://lh6.googleusercontent.com/proxy/8m3WlkXl4f-TCcfZdO6Q5C6LBnfoVYLJDCRLyet4dFO4D28N3xA9O6CxAgPsFYTANurusnJ0975reoALCwjJEvgj4DEtzhHWB2KK1LTuLQKNtPBG6uWvKcBZRnBlZYho96nk-9zsqgMSTgCGIVYic4Y=w1200-h630-p-k-no-nu" // Добавена снимка
  }
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [usedJokers, setUsedJokers] = useState({
    info: false,
    hint: false,
    image: false
  });

  const useHintJoker = () => {
    if (!usedJokers.hint) {
      setUsedJokers({ ...usedJokers, hint: true }); // Блокирай бутоните за подсказка след използването му
      alert(questions[currentQuestion].hint);
    }
  };

  const useInfoJoker = () => {
    if (!usedJokers.info) {
      window.open("https://www.wikipedia.org/", "_blank");
      setUsedJokers({ ...usedJokers, info: true });
    }
  };

  const useImageJoker = () => {
    if (!usedJokers.image) {
      // Отваряме снимката в нов таб
      window.open(questions[currentQuestion].image, "_blank");
      setUsedJokers({ ...usedJokers, image: true });
    }
  };

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    setTimeout(() => {
      if (index === questions[currentQuestion].correct) {
        setScore(score + 100);
        if (currentQuestion + 1 < questions.length) {
          setTimeout(() => {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
          }, 1000);
        } else {
          setGameOver(true);
        }
      } else {
        setScore(0);
        setCurrentQuestion(0);
        setSelectedAnswer(null);
      }
    }, 1000);
  };

  return (
    <div className="game-container">
      <img
        src="https://bugwire.de/wp-content/uploads/2020/10/WWTBAM_Germany_Logo11.png"
        alt="Game Logo"
        className="game-logo"
      />
      <div className="content">
        {gameOver ? (
          <h2 className="win-message">Herzlichen Glückwunsch! Sie gewinnen {score} 🍪!</h2>
        ) : (
          <>
            <div className="question-box">
              <h2>{questions[currentQuestion].question}</h2>
            </div>
            <div className="answers">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`answer-btn ${
                    selectedAnswer === index
                      ? index === questions[currentQuestion].correct
                        ? "correct"
                        : "wrong"
                      : ""
                  }`}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              ))}
            </div>
            <h3 className="score">Summe: {score} 🍪</h3>

            <div className="jokers">
              <button className="joker-btn" onClick={useInfoJoker} disabled={usedJokers.info}>
                📖 Information
              </button>
              <button className="joker-btn" onClick={useHintJoker} disabled={usedJokers.hint}>
                💡 Hinweis
              </button>
              <button className="joker-btn" onClick={useImageJoker} disabled={usedJokers.image}>
                🖼️ Photo
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
