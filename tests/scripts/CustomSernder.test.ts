import "jest";

import {DynaEmailSender} from "../../src";
import {IError} from "dyna-interfaces";

describe.skip('Send mails with EmailSender', () => {
  it('should send email', (done: Function) => {
    const sender: DynaEmailSender = new DynaEmailSender({
      host: 'main...',
      port: 465,
      tls: true,
      username: 'user-name...',
      password: 'password...',
      allowInvalidCertificates: false,
    });

    sender.send({
      fromTitle: 'Info My Company 👻',      // sender address
      fromAddress: 'info@example.com',      // sender address
      toAddress: 'linda@example.com',       // list of receivers
      subject: 'Hello ✔',                   // Subject line
      text: 'Hello world?',                 // plain text body
      html: '<b>Hello world?</b>',          // html body
    })
      .then((messageId: string) => {
        expect(!!messageId).toBe(true);
        done();
      })
      .catch((error: IError) => {
        fail(error);
        done();
      });
  });
});
