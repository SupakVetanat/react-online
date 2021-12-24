import React from "react";
import { BsGithub } from "react-icons/bs";

import { Card, Button } from "react-bootstrap";

function ContactPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 m-4">
          <Card>
            <Card.Header>Contact Us</Card.Header>
            <Card.Body>
              <Card.Title>Supak Vetanat</Card.Title>
              <Card.Text>
                  สวัสดีค่ะ ชื่อฟ้าค่ะ ขอบคุณที่เข้ามาเยี่ยมชมนะคะ!
                <ul className="mt-2">
                  <li>
                    กำลังเรียนอยู่ที่สถาบันเทคโนโลยีไทย-ญี่ปุ่น ชั้นปีที่3 คณะ
                    Information Technology สาขา Multimedia Technology 💻
                  </li>
                  <li>อนาคตอยากทำงานในบริษัทเกมสักแห่ง อาจจะเป็นตำแหน่งเกี่ยวกับ code หรือ art ก็ได้ค่ะ 🎮</li>
                  <li>เวลาว่างจะชอบวาดรูป ดูอนิเมะ แล้วก็ทำขนม! 🍪</li>
                  <li>
                    เป็นทาสแมวหนักมาก
                    ถึงจะไม่ได้เลี้ยงเองแต่ชอบเล่นกับแมวจรมากค่ะ 🐱
                  </li>
                </ul>
                For my github visit link below.
              </Card.Text>
              <Button
                href="https://github.com/SupakVetanat/"
                variant="outline-secondary"
              >
                <BsGithub size={30} color="gray" /> Click here
              </Button>
              <br />
              <br />
              <b>Contact Me</b> : ve.supak_st@tni.ac.th
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
