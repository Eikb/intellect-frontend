import { Button, Typography } from "@mui/material";
import React from "react";
import "./stapler.css"

const Stapler = () => {
  return (
    <div style={{ marginTop: "2%", marginLeft: "3%", marginRight: "3%" }}>
      <Typography fontSize="25px" fontWeight="bold">
        Ausbildung zum/r Staplerfahrer/in
      </Typography>
      <Typography fontSize="18px">
        Wir bilden aus gemäß DGUV-G 308-001, DGUV Vorschrift 1 und DGUV
        Vorschrift 68.
      </Typography>
      <Typography fontSize="18px" fontWeight="bold" style={{ marginTop: "3%" }}>
        Ausbildung für Einsteiger und Fortgeschrittene, Theorie und Praxis.
      </Typography>
      <Typography fontSize="18px" style={{ marginTop: "1%" }}>
        In einem zweitägigen Kurs vermitteln wir Ihnen am ersten Tag die
        theoretischen Grundlagen zum Führen eines Gabelstaplers. Am zweiten Tag
        wird der praktische Einsatz mit Stapler und Trainingsgegenständen geübt
        und schlussendlich mit einer Fahrprüfung abgeschlossen. Wenn Sie schon
        praktische Erfahrung mit Gabelstaplern haben, können Sie auch unseren
        verkürzten Ein-Tages-Kurs in Anspruch nehmen, somit können Sie in nur
        einem Tag den Staplerschein machen.
      </Typography>
      <Typography fontSize="18px" style={{ marginTop: "1%" }}>
        Wir bieten jeden Samstag von 9:00 bis 17:00 Uhr Ein - Tages - Kurs für
        Fortgeschrittene Teilnehmer an. Für Anfänger bieten wir eine zweitägige
        Ausbildung an, deren Termine wir individuell vereinbaren können.{" "}
      </Typography>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ minWidth: "50%" }}>
          <Typography
            fontSize="18px"
            fontWeight="bold"
            style={{ marginTop: "5%" }}
          >
            Wir bieten Ihnen die Ausbildung zum Führen von Flurförderzeugen nach
            den Richtlinien der Berufsgenossenschaft.
          </Typography>
          <Typography fontSize="18px" style={{ marginTop: "1%" }}>
            Ausbildungsziel ist der Erwerb des Staplerführerscheins
            (Staplerschein). Bedeutung der Gabelstaplerausbildung und
            Staplerschulung.
          </Typography>
          <Typography fontSize="18px" style={{ marginTop: "2%" }}>
            Die Anzahl der im Einsatz befindlichen Gabelstapler in der
            Bundesrepublik wird auf über 300.000, die der Fahrer auf 1-1,5
            Millionen geschätzt. Im Transport-, Lager- und Verkehrswesen stellen
            die Gabelstaplerfahrer hinter den Berufskraftfahrern die
            zweitwichtigste Berufsgruppe dar. Auf den innerbetrieblichen Bereich
            bezogen stehen sie sogar an erster Stelle. Die
            Unfallverhütungsvorschrift DGUV 68 regelt im § 7 „Auftrag zum
            Steuern von Flurförderzeugen“:
            <br /> (1) Der Unternehmer darf mit dem selbständigen Steuern von
            Flurförderzeugen mit Fahrersitz oder Fahrerstand Personen nur
            beauftragen,die 1. mindestens 18 Jahre alt sind, 2. für die
            Tätigkeit geeignet und ausgebildet sind und 3. ihre Befähigung
            nachgewiesen haben.Der Auftrag muss schriftlich erteilt werden.
            <br /> (2) Der Unternehmer darf mit dem Steuern von
            Mitgänger-Flurförderzeugen nur Personen beauftragen, die geeignet
            und in der Handhabung unterwiesen sind.
            <br /> (3) Versicherte dürfen Flurförderzeuge nur steuern, wenn sie
            vom Unternehmer hiermit beauftragt sind. Voraussetzungen für die
            Staplerausbildung. Das Mindestalter für den Erwerb des
            Staplerscheines: 18 JahreGesundheitliche Eignung nach dem
            berufsgenossenschaftlichen Grundsatz G25 „Fahr-, Steuer- und
            Überwachungstätigkeiten Inhalt der Staplerausbildung /
            Staplerschulung
          </Typography>

          <Typography
            fontSize="18px"
            style={{ marginTop: "3%" }}
            fontWeight="bold"
          >
            Inhalt der Staplerausbildung / Staplerschulung
          </Typography>
          <Typography fontSize="18px" style={{ marginTop: "1%" }}>
            <li>Rechtliche Grundlagen nach DGUV 1 und Vorschrift DGUV 68</li>
            <li>Unfallgeschehen</li>
            <li>Aufbau und Funktion von Flurförderzeugen und Anbaugeräten</li>
            <li>Antriebsarten</li>
            <li>Standsicherheit</li>
            <li>Betrieb allgemein</li>
            <li>Regelmäßige Prüfungen</li>
            <li>Umgang mit Last</li>
            <li>Sondereinsätze</li>
            <li>Verkehrsregelung und Verkehrswege</li>
            <li>Tägliche Einsatzprüfung</li>
            <li>
              Praktische Fahr- und Stapelübungen nach DGUV Grundsätze 308-001
            </li>
            <li>Theoretische und praktische Prüfung</li>
          </Typography>
          <Typography fontSize="18px" style={{ marginTop: "1%" }}>
            Durch die theoretische Ausbildung und die praxisorientierte
            Stapler-Schulung werden Sie zuverlässig ausgebildet, um sicher
            Gabelstapler bedienen und damit arbeiten zu können.{" "}
          </Typography>
        </div>

        <div style={{ marginLeft: "2%" }} className="image">
          <img
            src={require("../assets/aboutus_cover.jpeg")}
            width="100%"
            style={{ borderRadius: "20px", marginTop: "30%" }}
          />
        </div>
      </div>
      <Typography fontSize="18px" fontWeight="bold" style={{ marginTop: "4%" }}>
        Jährliche Unterweisung
      </Typography>

      <Typography fontSize="18px" style={{ marginTop: "1%" }}>
        Die jährliche Unterweisung hilft Ihnen dabei sich wieder mit den Risiken
        aber auch mit den Möglichkeiten des Gabelstaplers zu befassen und
        vergessenes Wissen aufzufrischen. Unsere Ausbildung erfüllt die
        Anforderungen der Berufsgenossenschaft und erweitert Ihre Fachkompetenz.
        Die Unterweisung muss mindestens einmal jährlich erfolgen und
        dokumentiert werden.{" "}
      </Typography>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ marginRight: "2%" }}>
          <img
          className="image"
            src={require("../assets/aboutus_cover.jpeg")}
            width="80%"
            style={{ borderRadius: "20px", marginTop: "4%" }}
          />
        </div>

        <div style={{ minWidth: "60%" }}>
          <Typography
            fontSize="18px"
            fontWeight="bold"
            style={{ marginTop: "3%" }}
          >
            Ausbildungskosten
          </Typography>
          <Typography fontSize="18px" style={{ marginTop: "3%" }}>
            Für den eintägigen Kurs: <br /> <li>165€ pro Person</li>
          </Typography>

          <Typography fontSize="18px" style={{ marginTop: "3%" }}>
            Für den zweitätigen Kurs: <br /> <li>265€ pro Person</li>
          </Typography>
          <Button style={{marginTop:"20%", background:"rgb(225 159 37)", color:"white", height:"10%", borderRadius:"20px", fontSize:"110%"}} fullWidth>Jetzt den Staplerschein machen</Button>
        </div>
      </div>
    </div>
  );
};

export default Stapler;
