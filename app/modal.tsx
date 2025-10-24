import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function WelcomeScreen() {
  const [agreed, setAgreed] = useState(false);
  const [screen, setScreen] = useState<"welcome" | "privacy" | "terms">(
    "welcome"
  );
  const router = useRouter();

  useEffect(() => {
    const checkAgreement = async () => {
      const accepted = await AsyncStorage.getItem("userAcceptedTerms");
      if (accepted === "true") {
        router.replace("/(tabs)");
      }
    };
    checkAgreement();
  }, []);

  const handleContinue = async () => {
    await AsyncStorage.setItem("userAcceptedTerms", "true");
    router.replace("/(tabs)");
  };

  if (screen === "privacy") {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setScreen("welcome")}
          >
            <Ionicons name="arrow-back" size={16} color="orange" />
          </TouchableOpacity>
          <Text style={styles.topBarTitle}>Privacy Policy</Text>
        </View>

        <ScrollView contentContainerStyle={{ padding: 10 }}>
          <Text style={styles.termsText}>
            Credit-Debit.com (“we,” “our,” “us”) values your privacy. This
            Privacy Policy explains how we collect, use, and protect your
            personal data when you use our Personal Budget App (“App”).
          </Text>
          <Text style={styles.termsText}>
            1. <Text style={styles.bold}>Information We Collect</Text>
            {"\n"}• Personal Information: Name, email, phone (when you create an
            account).
            {"\n"}• Financial Information: Income, expenses, budgets, and
            bank/credit card details you input.
            {"\n"}• Usage Data: Device information, app interactions, cookies.
          </Text>
          <Text style={styles.termsText}>
            2. <Text style={styles.bold}>How We Use Your Data</Text>
            {"\n"}• To provide personalized budget tracking and insights.
            {"\n"}• To recommend relevant banking and financial products.
            {"\n"}• To improve app performance and user experience.
            {"\n"}• To send updates, offers, or alerts (you can opt out
            anytime).
          </Text>
          <Text style={styles.termsText}>
            3. <Text style={styles.bold}>Data Sharing</Text>
            {"\n"}We do not sell your data.
            {"\n"}We may share data only with:
            {"\n"}• Service providers (cloud storage, analytics, payment
            processors).
            {"\n"}• Banking/financial partners (only with your consent, e.g.,
            when applying for a product).
            {"\n"}• Law enforcement, if legally required.
          </Text>
          <Text style={styles.termsText}>
            4. <Text style={styles.bold}>Data Security</Text>
            {"\n"}We use encryption and secure servers to protect your data.
            However, no method of transmission is 100% secure. You use the App
            at your own risk.
          </Text>
          <Text style={styles.termsText}>
            5. <Text style={styles.bold}>Your Rights</Text>
            {"\n"}Depending on your country, you may have rights to:
            {"\n"}• Access, correct, or delete your personal data.
            {"\n"}• Withdraw consent for data processing.
            {"\n"}• File a complaint with your data protection authority.
          </Text>
          <Text style={styles.termsText}>
            6. <Text style={styles.bold}>Data Retention</Text>
            {"\n"}We keep your data as long as you maintain an account. Upon
            deletion, we securely erase or anonymize your data, except where law
            requires retention.
          </Text>
          <Text style={styles.termsText}>
            7. <Text style={styles.bold}>Cookies & Tracking</Text>
            {"\n"}The App and website may use cookies or similar technologies
            for analytics and personalization. You can manage cookie preferences
            in your browser.
          </Text>
          <Text style={styles.termsText}>
            8. <Text style={styles.bold}>Third-Party Links</Text>
            {"\n"}Our App may display offers or links from third-party banks or
            partners. We are not responsible for their privacy practices.
          </Text>
          <Text style={styles.termsText}>
            9. <Text style={styles.bold}>Updates to Policy</Text>
            {"\n"}We may update this Privacy Policy. Changes will be posted with
            an updated “Effective Date.”
          </Text>
          <Text style={styles.termsText}>
            10. <Text style={styles.bold}>Contact Us</Text>
            {"\n"}If you have questions about this Privacy Policy, contact us
            at:
            {"\n"}📧 info@credit-debit.com
          </Text>
        </ScrollView>
      </View>
    );
  }

  if (screen === "terms") {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setScreen("welcome")}
          >
            <Ionicons name="arrow-back" size={16} color="orange" />
          </TouchableOpacity>
          <Text style={styles.topBarTitle}>Terms & Conditions</Text>
        </View>

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={{ padding: 10 }}>
          <Text style={styles.termsText}>
            Welcome to the Personal Budget App (“App”), a service provided by
            Credit-Debit.com (“we,” “our,” “us”). By using this App, you agree
            to these Terms of Use (“Terms”). Please read them carefully.
          </Text>

          <Text style={styles.termsText}>
            1. <Text style={styles.bold}>Eligibility</Text>
            {"\n"}You must be at least 18 years old to use the App. By using the
            App, you confirm that you are legally capable of entering into this
            agreement.
          </Text>

          <Text style={styles.termsText}>
            2. <Text style={styles.bold}>Use of the App</Text>
            {"\n"}The App is intended for personal financial planning only. You
            agree not to use the App for any unlawful purpose, including fraud
            or misrepresentation. You are responsible for maintaining the
            confidentiality of your account login details.
          </Text>

          <Text style={styles.termsText}>
            3. <Text style={styles.bold}>Data and Content</Text>
            {"\n"}You may input financial information (income, expenses, bank
            details, etc.) into the App. You retain ownership of your data, but
            you grant us a license to store and process it for the purpose of
            providing services. We do not provide financial, tax, or investment
            advice. The App is for informational purposes only.
          </Text>

          <Text style={styles.termsText}>
            4. <Text style={styles.bold}>Third-Party Services</Text>
            {"\n"}The App may show links or offers from banks, credit card
            providers, or other partners. We are not responsible for products,
            services, or content provided by third parties.
          </Text>

          <Text style={styles.termsText}>
            5.{" "}
            <Text style={styles.bold}>
              Disclaimers & Limitation of Liability
            </Text>
            {"\n"}The App is provided “as is” without warranties of any kind. We
            are not liable for inaccuracies in financial calculations or
            decisions you make based on the App. Our total liability will not
            exceed the subscription fees (if any) paid in the past 12 months.
          </Text>

          <Text style={styles.termsText}>
            6. <Text style={styles.bold}>Termination</Text>
            {"\n"}We may suspend or terminate your access to the App if you
            violate these Terms.
          </Text>

          <Text style={styles.termsText}>
            7. <Text style={styles.bold}>Changes to Terms</Text>
            {"\n"}We may update these Terms from time to time. Continued use of
            the App means you accept the revised Terms.
          </Text>

          <Text style={styles.termsText}>
            8. <Text style={styles.bold}>Governing Law</Text>
            {"\n"}These Terms are governed by the laws of India. Any disputes
            will be subject to the exclusive jurisdiction of courts in [Your
            City/State].
          </Text>
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to Credit-Debit</Text>
        <Text style={styles.subtitle}>
          Please read and accept our Terms & Conditions and Privacy Policy to
          continue.
        </Text>

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={agreed}
            onValueChange={setAgreed}
            color={agreed ? "orange" : undefined}
          />
          <Text style={styles.checkboxLabel}>
            I have carefully read and fully agree to the{" "}
            <Text style={styles.linkText} onPress={() => setScreen("terms")}>
              Terms & Conditions
            </Text>{" "}
            and{" "}
            <Text style={styles.linkText} onPress={() => setScreen("privacy")}>
              Privacy Policy
            </Text>
            .
          </Text>
        </View>

        <TouchableOpacity
          disabled={!agreed}
          style={[styles.continueButton, !agreed && { opacity: 0.5 }]}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContent: { alignItems: "center" },
  logo: {
    width: 250,
    height: 250,
    marginTop: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#080808ff",
    textAlign: "center",
    marginBottom: 20,
  },
  linksContainer: { flexDirection: "row", gap: 20, marginBottom: 15 },
  linkText: {
    color: "orange",
    fontSize: 13,
    marginHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 45,
    width: "90%",
  },
  checkboxLabel: { marginLeft: 10, fontSize: 14, color: "#333" },
  continueButton: {
    backgroundColor: "orange",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  text: { fontSize: 16, lineHeight: 22, marginBottom: 20 },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "orange",
    borderRadius: 8,
  },
  backText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    marginTop: 30,
  },
  backArrow: {
    color: "orange",
  },
  iconContainer: {
    marginRight: 8,
  },
  topBarTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  termsText: {
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 12,
    color: "#333",
  },
  bold: {
    fontWeight: "500",
  },
});
