'use strict';
import nodemailer from 'nodemailer';
require('dotenv').config();

/*
 *Funcion principal transporter
 *
 * */

const createTrans = () => {
  let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '69761e6dcbead9',
      pass: '63fc3c92796b5c',
    },
  });
  return transport;
};

export const sendMail = async (n_cedula, recaudo, referencia, n_cupo) => {
  const transport = createTrans();
  const info = await transport.sendMail({
    from: 'jhonny.agudelo3120@gmail.com',
    to: 'jhonny.agudelo3120@gmail.com',
    subject: 'Acabamos de recibir su pago',
    html: `
<!DOCTYPE html>

<html
  lang="en"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <!--[if mso
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:PixelsPerInch>96</o:PixelsPerInch
          ><o:AllowPNG /></o:OfficeDocumentSettings></xml
    ><![endif]-->
    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Cormorant+Garamond"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Lato"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Bitter"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Arvo"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Cabin"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Droid+Serif"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Fira+Sans"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Ubuntu"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Shrikhand"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto+Slab"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Abril+Fatface"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Alegreya"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Lora"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Merriweather"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Catamaran"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Monda"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Poppins"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }

      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }

      p {
        line-height: inherit;
      }

      @media (max-width: 625px) {
        .icons-inner {
          text-align: center;
        }

        .icons-inner td {
          margin: 0 auto;
        }

        .row-content {
          width: 100% !important;
        }

        .column .border {
          display: none;
        }

        .stack .column {
          width: 100%;
          display: block;
        }

        .reverse {
          display: table;
          width: 100%;
        }

        .reverse .column.first {
          display: table-footer-group !important;
        }

        .reverse .column.last {
          display: table-header-group !important;
        }

        .row-1 td.column.first > table,
        .row-1 td.column.last > table {
          padding-left: 0;
          padding-right: 0;
        }
      }
    </style>
  </head>
  <body
    style="
      background-color: #dbdbdb;
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    "
  >
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="nl-container"
      role="presentation"
      style="
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #dbdbdb;
      "
      width="100%"
    >
      <tbody>
        <tr>
          <td>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-1"
              role="presentation"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background-color: #ececec;
              "
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #ececec;
                        color: #000000;
                        width: 605px;
                      "
                      width="605"
                    >
                      <tbody>
                        <tr class="reverse">
                          <td
                            class="column column-1 first"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="50%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="heading_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  style="
                                    width: 100%;
                                    text-align: center;
                                    padding-top: 65px;
                                  "
                                >
                                  <h2
                                    style="
                                      margin: 0;
                                      color: #3a3a3a;
                                      direction: ltr;
                                      font-family: Poppins, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 25px;
                                      font-weight: 400;
                                      letter-spacing: 3px;
                                      line-height: 150%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                    "
                                  >
                                    <span class="tinyMce-placeholder"
                                      >PREVISER</span
                                    >
                                  </h2>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="text_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  style="
                                    padding-bottom: 15px;
                                    padding-left: 15px;
                                    padding-right: 15px;
                                    padding-top: 10px;
                                  "
                                >
                                  <div style="font-family: sans-serif">
                                    <div
                                      style="
                                        font-size: 12px;
                                        font-family: Poppins, Arial, Helvetica,
                                          sans-serif;
                                        mso-line-height-alt: 14.399999999999999px;
                                        color: #3a3a3a;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          font-size: 14px;
                                          text-align: center;
                                        "
                                      >
                                        <span style="font-size: 12px"
                                          >usuario registrado con este numero de cedula ${n_cedula} su pago a sido registrado a
                                          nuestro sistema por el valor del ${recaudo}, 
                                          al producto ${referencia} con el numero de cupo
                                          #${n_cupo}, gracias por confiar en
                                          nostros</span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td
                            class="column column-2 last"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="50%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  style="
                                    padding-bottom: 10px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 15px;
                                    width: 100%;
                                  "
                                >
                                  <div align="center" style="line-height: 10px">
                                    <a
                                      href="www.example.com"
                                      style="outline: none"
                                      tabindex="-1"
                                      target="_blank"
                                      ><img
                                        alt="Image of hairdresser"
                                        src="images/Hairstylist_2.png"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          width: 293px;
                                          max-width: 100%;
                                        "
                                        title="Image of hairdresser"
                                        width="293"
                                    /></a>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-2"
              role="presentation"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background-color: #ececec;
              "
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #ececec;
                        color: #000000;
                        width: 605px;
                      "
                      width="605"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              padding-top: 5px;
                              padding-bottom: 0px;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="social_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  style="
                                    padding-bottom: 15px;
                                    padding-top: 15px;
                                    text-align: center;
                                    padding-right: 0px;
                                    padding-left: 0px;
                                  "
                                >
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="social-table"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="260px"
                                  >
                                    <tr>
                                      <td style="padding: 0 10px 0 10px">
                                        <a
                                          href="https://www.facebook.com/"
                                          target="_blank"
                                          ><img
                                            alt="Facebook"
                                            height="32"
                                            src="images/facebook2x.png"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                            "
                                            title="Facebook"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td style="padding: 0 10px 0 10px">
                                        <a
                                          href="https://twitter.com/"
                                          target="_blank"
                                          ><img
                                            alt="Twitter"
                                            height="32"
                                            src="images/twitter2x.png"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                            "
                                            title="Twitter"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td style="padding: 0 10px 0 10px">
                                        <a
                                          href="https://instagram.com/"
                                          target="_blank"
                                          ><img
                                            alt="Instagram"
                                            height="32"
                                            src="images/instagram2x.png"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                            "
                                            title="Instagram"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td style="padding: 0 10px 0 10px">
                                        <a
                                          href="https://www.pinterest.com/"
                                          target="_blank"
                                          ><img
                                            alt="Pinterest"
                                            height="32"
                                            src="images/pinterest2x.png"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                            "
                                            title="Pinterest"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td style="padding: 0 10px 0 10px">
                                        <a
                                          href="https://www.youtube.com/"
                                          target="_blank"
                                          ><img
                                            alt="YouTube"
                                            height="32"
                                            src="images/youtube2x.png"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                            "
                                            title="YouTube"
                                            width="32"
                                        /></a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="html_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td>
                                  <div
                                    align="center"
                                    style="
                                      font-family: Poppins, Arial, Helvetica,
                                        sans-serif;
                                      text-align: center;
                                    "
                                  >
                                    <div style="height: 10px"> </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="text_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  style="
                                    padding-bottom: 15px;
                                    padding-left: 10px;
                                    padding-right: 10px;
                                    padding-top: 10px;
                                  "
                                >
                                  <div style="font-family: sans-serif">
                                    <div
                                      style="
                                        font-size: 12px;
                                        font-family: Poppins, Arial, Helvetica,
                                          sans-serif;
                                        mso-line-height-alt: 18px;
                                        color: #000000;
                                        line-height: 1.5;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          text-align: center;
                                          font-size: 10px;
                                          mso-line-height-alt: 15px;
                                        "
                                      >
                                        <span style="font-size: 10px"
                                          >Calle 29 N° 27-40</span
                                        >
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          text-align: center;
                                          font-size: 10px;
                                          mso-line-height-alt: 15px;
                                        "
                                      >
                                        <span style="font-size: 10px"
                                          >Oficina 310 Piso 3ro</span
                                        >
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          text-align: center;
                                          font-size: 10px;
                                          mso-line-height-alt: 15px;
                                        "
                                      >
                                        <span style="font-size: 10px"
                                          >Oficina 310</span
                                        >
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          text-align: center;
                                          font-size: 10px;
                                          mso-line-height-alt: 15px;
                                        "
                                      >
                                        <span style="font-size: 10px"
                                          >Cel: 310 474 6209</span
                                        >
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          text-align: center;
                                          font-size: 10px;
                                          mso-line-height-alt: 15px;
                                        "
                                      >
                                        <span style="font-size: 10px"
                                          >Edificio banco de bogota</span
                                        >
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          text-align: center;
                                          font-size: 10px;
                                          mso-line-height-alt: 15px;
                                        "
                                      >
                                        <span style="font-size: 10px"
                                          ><a
                                            href="http://www.previser.com.co"
                                            rel="noopener"
                                            style="color: #3a3a3a"
                                            target="_blank"
                                            >www.previser.com.co</a
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="html_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td>
                                  <div
                                    align="center"
                                    style="
                                      font-family: Poppins, Arial, Helvetica,
                                        sans-serif;
                                      text-align: center;
                                    "
                                  >
                                    <div style="height: 30px"> </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-3"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        color: #000000;
                        width: 605px;
                      "
                      width="605"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              padding-top: 5px;
                              padding-bottom: 5px;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="icons_block"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  style="
                                    vertical-align: middle;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    color: #9d9d9d;
                                    font-family: inherit;
                                    font-size: 15px;
                                    text-align: center;
                                  "
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        style="
                                          vertical-align: middle;
                                          text-align: center;
                                        "
                                      >
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End -->
  </body>
</html>

    `,
  });
  console.log(' Message sent: %s', info.messageId);
  return;
};

//export const enviar_mail = (cedula, recaudo, referencia, cupo) => {
//let transporter = nodemailer.createTransport({
//service: 'gmail',
//auth: {
//user: process.env.MAILUSER,
//pass: process.env.MAILPSSWD,
//},
//});
//let mail_options = {
//from: 'jhonny.agudelo3120@gmail.com',
//to: 'jhonny.agudelo3120@gmail.com',
//subject: 'Acabamos de recibir su pago',

//};
//transporter.sendMail(mail_options, (error, info) => {
//if (error) {
//console.log(error);
//} else {
//console.log('el correo se envio' + info.response);
//}
//});
//};
