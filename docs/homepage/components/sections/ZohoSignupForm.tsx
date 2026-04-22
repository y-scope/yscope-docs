/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
import React, {
    useEffect,
    useRef,
    useState,
} from "react";


type Props = {
    className?: string;
};

const ZUID = "128d06ea5";
const FORM_IX =
    "3ze0e35dd1451790f3dfce02b61f9f4a924dfe224e3d364b4cc15fde65ac838ab9";

/**
 * A Zoho newsletter signup form component that integrates with Zoho's optin service.
 *
 * @param root0
 * @param root0.className Optional CSS class name to apply to the root container
 * @return A React component rendering the newsletter signup form
 */
const MIN_EMAIL_LENGTH = 5;
const MIN_NAME_LENGTH = 2;

/**
 * A Zoho newsletter signup form component that integrates with Zoho's optin service.
 *
 * @param root0
 * @param root0.className Optional CSS class name to apply to the root container
 * @return A React component rendering the newsletter signup form
 */
const ZohoSignupForm = ({className}: Props) => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [emailError, setEmailError] = useState<string | null>(null);
    const [firstNameError, setFirstNameError] = useState<string | null>(null);
    const [formError, setFormError] = useState<string | null>(null);
    const [successVisible, setSuccessVisible] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const iframeName = "_zcSignup";
    const formRef = useRef<HTMLFormElement | null>(null);

    const handleFormSubmit = () => {
        // basic validations
        let formHasErrors = false;
        const emailVal = email.trim();
        const nameVal = firstName.trim();

        const isEmailValid = (/^\S+@\S+\.\S+$/).test(emailVal);
        if (false === isEmailValid || MIN_EMAIL_LENGTH > emailVal.length) {
            setEmailError("Please enter a valid email address.");
            formHasErrors = true;
        }

        if (MIN_NAME_LENGTH > nameVal.length) {
            setFirstNameError("Please enter your name.");
            formHasErrors = true;
        }

        if (formHasErrors) {
            setFormError("Please fix the errors above.");
            return;
        }

        // mark that we've initiated a submit so iframe load can trigger success
        setSubmitting(true);

        // submit the form programmatically to honor the target iframe
        try {
            formRef.current?.submit();
        } catch {
            setSubmitting(false);
            setFormError("Submission failed. Please try again.");
        }
    };

    useEffect(() => {
        const existing = document.querySelector(
            "script[src*=\"ma.zoho.com/js/optin.min.js\"]"
        );

        if (existing) {
            return;
        }

        const s = document.createElement("script");
        s.src = "https://ma.zoho.com/js/optin.min.js";
        s.async = true;
        s.onload = () => {
            try {
                // setupSF is provided by the loaded Zoho script
                const windowObj = window as unknown;
                if ("object" === typeof windowObj && null !== windowObj && "setupSF" in windowObj) {
                    const {setupSF} = (windowObj as Record<string, unknown>);
                    if ("function" === typeof setupSF) {
                        (setupSF as (formIx: string, trackCode: string, autoOptIn: boolean, theme: string) => void)(FORM_IX, "ZCFORMVIEW", false, "light");
                    }
                }
            } catch {
                // ignore
            }
        };
        document.body.appendChild(s);
    }, []);

    // If the Zoho endpoint returns to the hidden iframe we can show a success
    useEffect(() => {
        const handleMessage = (ev: MessageEvent) => {
            if (false === ev.origin.includes("zoho.com")) {
                return;
            }
            if ("string" === typeof ev.data && ev.data.includes("Thank you")) {
                setSuccessVisible(true);
            }
        };

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, []);

    return (
        <div
            className={className}
        >
            <iframe
                name={iframeName}
                style={{display: "none"}}
                title={"zc-iframe"}
                onLoad={() => {
                    // If we submitted and the iframe finished loading, assume submission completed.
                    // -> Currently treats any iframe load during submission as a success
                    if (submitting) {
                        setSuccessVisible(true);

                        // clear controlled inputs after successful submission
                        setEmail("");
                        setFirstName("");
                        setSubmitting(false);
                    }
                }}/>

            <div
                className={"newsletter-card"}
            >
                <div
                    id={"SIGNUP_HEADING"}
                    style={{
                        fontSize: 22,
                        fontWeight: "bold",
                        color: "var(--brilliant-azure)",
                    }}
                >
                    Join YScope&apos;s Newsletter
                </div>

                {successVisible && (
                    <div
                        style={{
                            backgroundColor: "var(--tuscan-sun-300)",
                            color: "var(--black)",
                            padding: 2,
                            margin: 8,
                        }}
                    >
                        Thank you for Signing Up
                    </div>
                )}

                <form
                    action={"https://zcsub-cmpzourl.maillist-manage.com/weboptin.zc"}
                    className={"mx-2"}
                    method={"POST"}
                    ref={formRef}
                    target={iframeName}
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (submitting) {
                            return;
                        }
                        setEmailError(null);
                        setFirstNameError(null);
                        setFormError(null);
                        handleFormSubmit();
                    }}
                >
                    <div className={"w-100 text-muted mt-3"}>
                        <input
                            className={"text-input w-100"}
                            id={"EMBED_FORM_EMAIL_LABEL"}
                            name={"CONTACT_EMAIL"}
                            placeholder={"Email"}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (emailError) {
                                    setEmailError(null);
                                }
                            }}/>
                        {emailError && (
                            <div
                                role={"alert"}
                                style={{color: "#b91c1c", marginTop: 6}}
                            >
                                {emailError}
                            </div>
                        )}
                    </div>

                    <div className={"w-100 text-muted mt-3"}>
                        <input
                            className={"text-input w-100"}
                            id={"FIRSTNAME"}
                            name={"FIRSTNAME"}
                            placeholder={"Name"}
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                                if (firstNameError) {
                                    setFirstNameError(null);
                                }
                            }}/>
                        {firstNameError && (
                            <div
                                role={"alert"}
                                style={{color: "#b91c1c", marginTop: 6}}
                            >
                                {firstNameError}
                            </div>
                        )}
                    </div>

                    <div className={"w-100 mt-3"}>
                        <input
                            aria-disabled={submitting}
                            className={"w-100 bg-[var(--brilliant-azure-550)] hover:bg-[var(--brilliant-azure-700)] text-lg text-white px-4 py-2 rounded-md cursor-pointer"}
                            disabled={submitting}
                            id={"zcWebOptin"}
                            type={"submit"}
                            value={submitting ?
                                "Submitting…" :
                                "Join Now"}/>
                        {formError && (
                            <div
                                role={"alert"}
                                style={{color: "#b91c1c", marginTop: 8}}
                            >
                                {formError}
                            </div>
                        )}
                    </div>

                    {/* Hidden fields copied from original form */}
                    <input
                        id={"submitType"}
                        name={"submitType"}
                        type={"hidden"}
                        value={"optinCustomView"}/>
                    <input
                        id={"emailReportId"}
                        name={"emailReportId"}
                        type={"hidden"}
                        value={""}/>
                    <input
                        id={"formType"}
                        name={"formType"}
                        type={"hidden"}
                        value={"QuickForm"}/>
                    <input
                        id={"cmpZuid"}
                        name={"zx"}
                        type={"hidden"}
                        value={ZUID}/>
                    <input
                        name={"zcvers"}
                        type={"hidden"}
                        value={"3.0"}/>
                    <input
                        id={"allCheckedListIds"}
                        name={"oldListIds"}
                        type={"hidden"}
                        value={""}/>
                    <input
                        id={"mode"}
                        name={"mode"}
                        type={"hidden"}
                        value={"OptinCreateView"}/>
                    <input
                        id={"zcld"}
                        name={"zcld"}
                        type={"hidden"}
                        value={""}/>
                    <input
                        id={"zctd"}
                        name={"zctd"}
                        type={"hidden"}
                        value={"115eb0ad4019fbcaf"}/>
                    <input
                        id={"document_domain"}
                        type={"hidden"}
                        value={""}/>
                    <input
                        id={"zc_Url"}
                        type={"hidden"}
                        value={"judw-zngp.maillist-manage.com"}/>
                    <input
                        id={"new_optin_response_in"}
                        type={"hidden"}
                        value={"0"}/>
                    <input
                        id={"duplicate_optin_response_in"}
                        type={"hidden"}
                        value={"0"}/>
                    <input
                        id={"zc_trackCode"}
                        name={"zc_trackCode"}
                        type={"hidden"}
                        value={"ZCFORMVIEW"}/>
                    <input
                        id={"zc_formIx"}
                        name={"zc_formIx"}
                        type={"hidden"}
                        value={FORM_IX}/>
                    <input
                        id={"viewFrom"}
                        type={"hidden"}
                        value={"URL_ACTION"}/>
                </form>
            </div>
        </div>
    );
};

export default ZohoSignupForm;
