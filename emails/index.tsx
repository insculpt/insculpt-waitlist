import {
  Body,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const NotionWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head>
      <Font
        fontFamily="Geist"
        fallbackFontFamily="Helvetica"
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Geist:wght@400;700&display=swap",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Preview>Thanks for joining the Waitlist, {userFirstname}! 🎉</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://insculpt.io/waitlist-logo.png`}
          width="100"
          height="100"
          alt="Insculpt Logo"
          style={logo}
        />
        <Text style={greeting}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Thanks for joining the waitlist for <strong >Insculpt</strong>. We are really excited to have you on board.
        </Text>
        <Text style={paragraph}>
          Insculpt is an AI-first platform to build web, mobile, and desktop apps inside one unified workspace.
        </Text>
        <Text style={paragraph}>
          We’ll notify you as soon as early access opens.
        </Text>
        <Text style={paragraph}>
          Until then:
          <br />
          - You can also follow us on X/Twitter for updates:{" "}
          <a href="https://x.com/insculpt" style={link}>
            @insculpt
          </a>
          <br />
          - Reply to this email if you want early priority access.
        </Text>

        <Text style={paragraph}>
          We’re currently building the first release focused on:
          <br />
          - Prompt-to-app generation
          <br />
          - Unified workspace (UI, CMS, workflows)
          <br />
          - Multi-platform output
        </Text>

        <Text style={signOff}>
          Best regards,
          <br />
          Insculpt Team.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you signed up for the Insculpt waitlist.
          If you believe this is a mistake, feel free to ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
);

NotionWaitlistEmail.PreviewProps = {
  userFirstname: "Tyler",
} as EmailProps;

export default NotionWaitlistEmail;

const main = {
  fontFamily: 'Geist, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "#1a1a1a",
  borderRadius: "12px",
  border: "1px solid #333",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "20px",
};

const greeting = {
  color: "#E5E5E5",
  fontSize: "18px",
  lineHeight: "28px",
};

const paragraph = {
  color: "#E5E5E5",
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const link = {
  color: "#FF680A",
  textDecoration: "underline",
};

const signOff = {
  color: "#E5E5E5",
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
};

const hr = {
  borderColor: "#333333",
  margin: "20px 0",
};

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
};
