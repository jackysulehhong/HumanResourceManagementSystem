import mailer from 'nodemailer';

export const sendMail = async (content) => {
  let emailTemplate;
  switch (content.type) {
    case 'resetPassword': {
      emailTemplate = {
        subject: 'Reset Passsword!',
        html: `<p> Your new password is ${content.password}</p><br>`,
      };
      break;
    }

    case 'createUser': {
      emailTemplate = {
        subject: 'New user!',
        html: `<p> Email: ${content.email}</p><br><p> Password: ${content.password}</p>
        <br><a href="http://localhost:3000/auth">Click here to sign in</a>`,
      };
      break;
    }
    case 'newLeave': {
      emailTemplate = {
        subject: 'New Leave Request',
        html: `<p>${content.sender} sent a leave request</p>
        <br><a href="http://localhost:3000/leaves/view/${content.leaveId}">Click here to view</a>`,
      };
      break;
    }
    case 'leaveApproval': {
      emailTemplate = {
        subject: 'Leave Approval',
        html: `<p>${content.sender} ${content.status} your leave request</p>
        <br><a href="http://localhost:3000/leaves/view/${content.leaveId}">Click here to view</a>`,
      };
      break;
    }
    case 'joinTraining': {
      emailTemplate = {
        subject: 'New Join Training Request',
        html: `<p>${content.sender} sent a join training request</p>
        <br><a href="http://localhost:3000/training/view/${content.trainingId}">Click here to view</a>`,
      };
      break;
    }
    case 'newExternalTraining': {
      emailTemplate = {
        subject: 'New External Training Request',
        html: `<p>${content.sender} sent a external training request</p>
        <br><a href="http://localhost:3000/training/view/${content.trainingId}">Click here to view</a>`,
      };
      break;
    }
    case 'joinTrainingApproval': {
      emailTemplate = {
        subject: 'Internal Training Approval',
        html: `<p>${content.sender} ${content.status} your join training request</p>
        <br><a href="http://localhost:3000/training/view/${content.trainingId}">Click here to view</a>`,
      };
      break;
    }
    case 'externalTrainingApproval': {
      emailTemplate = {
        subject: 'External Training Approval',
        html: `<p>${content.sender} ${content.status} your external training request</p>
        <br><a href="http://localhost:3000/training/view/${content.trainingId}">Click here to view</a>`,
      };
      break;
    }
    default: {
      emailTemplate = {
        subject: 'This is subject',
        html: '<h2>The html content</h2><br>',
      };
      break;
    }
  }
  //console.log(emailTemplate);
  //console.log(content.email);
  let body = {
    from: process.env.EMAIL_SENDER,
    to: 'shaoqi1688@gmail.com', //comment this line by adding // in front of the line
    //to: content.email, //uncomment this line to send to seperate email accounts
    subject: emailTemplate.subject,
    html: emailTemplate.html,
  };

  const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take our messages');
    }
  });

  transporter.sendMail(body, (err, result) => {
    if (err) {
      console.log(err);
      return false;
    }
    console.log('email sent');
  });
};
