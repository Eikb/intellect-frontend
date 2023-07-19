import { Button, Typography } from "@mui/material";
import "./home.css";
import IconSection from "../components/IconSection";

const Home = () => {
  return (
    <>
      <div className="hero-container">
        <h1>Gabelstapler Kurse</h1>
        <p>Auf was wartest du?</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Online Termin Buchen
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Kontaktieren <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
      <IconSection />
      <Typography
      className="uberschrift"
        fontSize="200%"
        fontWeight="bold"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        Warum braucht man einen Staplerschein?
      </Typography>
      <div
        style={{
          height: "50vh",
          marginLeft: "5%",
          marginRight: "5%",
          backgroundImage: `url(${require("../assets/aboutus_cover.jpeg")})`,
          backgroundSize: "cover",
          borderRadius: "20px",
          marginTop: "4%",
        }}
      />
      <Typography
        fontSize="15px"
        marginLeft="5%"
        marginRight="5%"
        style={{
          marginTop: "1%",
        }}
      >
        Ein Staplerschein oder ein Gabelstaplerschein ist erforderlich, um den
        sicheren Betrieb von Gabelstaplern zu gewährleisten. Hier sind einige
        Gründe, warum man einen Staplerschein benötigt:{" "}
      </Typography>
      <Typography
        fontSize="15px"
        marginLeft="5%"
        marginRight="5%"
        style={{
          marginTop: "1%",
          display:"flex",
          flexDirection:"row"
        }}
      >
        • Gesetzliche Vorschriften: In
        vielen Ländern und Regionen gibt es gesetzliche Vorschriften, die den
        Besitz eines Staplerscheins für den Betrieb von Gabelstaplern
        vorschreiben. Diese Vorschriften dienen der Sicherheit am Arbeitsplatz
        und dem Schutz der Mitarbeiter. Unternehmen und Fahrer sind gesetzlich
        verpflichtet, die erforderliche Ausbildung und Qualifikation
        nachzuweisen, um den gesetzlichen Anforderungen zu entsprechen.
      </Typography>
      <Typography
        fontSize="15px"
        marginLeft="5%"
        marginRight="5%"
        style={{
          marginTop: "1%",
        }}
      >
        • Sicherheit: Der Umgang mit Gabelstaplern kann gefährlich sein, wenn er
        nicht ordnungsgemäß durchgeführt wird. Ein Staplerschein stellt sicher,
        dass der Fahrer die erforderlichen Kenntnisse und Fähigkeiten besitzt,
        um den Stapler sicher zu bedienen. Durch die Ausbildung werden
        potenzielle Risiken und Gefahren aufgezeigt und der Fahrer lernt, wie er
        sie vermeiden kann. Dies trägt zur Sicherheit des Fahrers selbst,
        anderer Mitarbeiter und zur Vermeidung von Sachschäden bei.
      </Typography>
      <Typography
        fontSize="15px"
        marginLeft="5%"
        marginRight="5%"
        style={{
          marginTop: "1%",
        }}
      >
        • Versicherungsanforderungen: Versicherungsgesellschaften können den
        Nachweis eines Staplerscheins verlangen, um sicherzustellen, dass das
        Unternehmen angemessene Maßnahmen zur Risikominimierung ergriffen hat.
        Ein Fahrer ohne Staplerschein könnte dazu führen, dass
        Versicherungsansprüche abgelehnt werden oder höhere Versicherungsprämien
        anfallen.
      </Typography>
      <Typography
        fontSize="15px"
        marginLeft="5%"
        marginRight="5%"
        style={{
          marginTop: "1%",
        }}
      >
        • Effizienz und Produktivität: Die richtige Ausbildung und Qualifikation
        im Umgang mit Gabelstaplern verbessern die Effizienz und Produktivität.
        Ein gut geschulter Staplerfahrer kann die Arbeit schneller und
        effizienter erledigen, was zu einer optimierten Warenbewegung und einer
        Steigerung der Produktivität im Unternehmen führt. anfallen.
      </Typography>
      <Typography
        fontSize="15px"
        marginLeft="5%"
        marginRight="5%"
        style={{
          marginTop: "1%",
        }}
      >
        • Berufliche Möglichkeiten: Ein Staplerschein kann die beruflichen
        Möglichkeiten erweitern. Viele Unternehmen, insbesondere in der
        Logistik- und Lagerbranche, stellen nur Fahrer mit einem Staplerschein
        ein. Der Besitz eines Staplerscheins kann daher die Chancen auf
        Beschäftigung oder beruflichen Aufstieg verbessern.
      </Typography>

      <Typography
        fontSize="15px"
        marginLeft="5%"
        marginRight="5%"
        style={{
          marginTop: "3%",
          marginBottom: "5%",
        }}
      >
        Es ist wichtig zu beachten, dass die genauen Anforderungen für den
        Erwerb eines Staplerscheins je nach Land oder Region unterschiedlich
        sein können. Es ist ratsam, sich über die spezifischen Vorschriften und
        Anforderungen in Ihrer Region zu informieren, um den gesetzlichen
        Bestimmungen gerecht zu werden und die Sicherheit am Arbeitsplatz zu
        gewährleisten.
      </Typography>
    </>
  );
};

export default Home;
