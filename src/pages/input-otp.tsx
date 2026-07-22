import {
  InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot,
} from "@/components/ui/input-otp"
import { Page, Section } from "@/components/demo/section"

export default function InputOTPDemo() {
  return (
    <Page title="Input OTP" description="Accessible one-time password component.">
      <Section title="Default">
        <InputOTP maxLength={6} defaultValue="123">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </Section>
    </Page>
  )
}
