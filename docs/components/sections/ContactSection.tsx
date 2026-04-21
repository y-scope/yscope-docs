"use client";

import {useRef} from "react";

import {
    Mail,
    MessageSquare,
    Send,
} from "lucide-react";

import ZohoSignupForm from "./ZohoSignupForm";

import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


/**
 * Renders the Discord icon.
 *
 * @return The Discord icon component.
 */
const DiscordIcon = () => (
    <img
        alt={"Discord"}
        className={"size-6"}
        src={"/assets/images/discord.svg"}/>
);

/**
 * Renders the Slack icon.
 *
 * @return The Slack icon component.
 */
const SlackIcon = () => (
    <img
        alt={"Slack"}
        className={"size-6"}
        src={"/assets/images/slack.svg"}/>
);

/**
 * Renders the Zulip icon.
 *
 * @return The Zulip icon component.
 */
const ZulipIcon = () => (
    <img
        alt={"Zulip"}
        className={"size-6"}
        src={"/assets/images/zulip.svg"}/>
);

const communityLinks = [
    {
        name: "Discord",
        url: "https://discord.gg/7kZA2m5G87",
        Icon: DiscordIcon,
        color: "bg-[#5865F2] hover:bg-[#4752C4]",
    },
    {
        name: "Slack",
        url: "https://communityinviter.com/apps/yscopecommunity/yscope-community",
        Icon: SlackIcon,
        color: "bg-[#4A154B] hover:bg-[#3a1039]",
    },
    {
        name: "Zulip",
        url: "https://yscope-clp.zulipchat.com",
        Icon: ZulipIcon,
        color: "bg-[#424244] hover:bg-[#323234]",
    },
];

/**
 * Renders the contact section with community links and newsletter signup.
 *
 * @return The contact section component.
 */
export const ContactSection = () => {
    return (
        <section
            className={"section bg-muted/30"}
            id={"connect-with-us"}
        >
            <div className={"container mx-auto"}>
                <div className={"text-center mb-6"}>
                    <h2 className={"text-3xl md:text-4xl font-bold mb-4"}>
                        {"Connect with Us"}
                    </h2>
                </div>

                <div className={"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"}>
                    {/* Community Links */}
                    <Card className={"contact-card"}>
                        <CardHeader>
                            <CardTitle className={"flex items-center gap-2"}>
                                <MessageSquare className={"h-5 w-5 text-blue-500"}/>
                                {"Join the Community"}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className={"space-y-6"}>
                            <div>
                                <p className={"text-muted-foreground text-sm mb-3"}>
                                    Connect with other CLP users, get help, and share your
                                    experiences.
                                </p>
                                <div className={"flex flex-wrap gap-3"}>
                                    {communityLinks.map((link) => {
                                        const {Icon} = link;
                                        return (
                                            <a
                                                href={link.url}
                                                key={link.name}
                                                rel={"noopener noreferrer"}
                                                target={"_blank"}
                                                className={
                                                    "inline-flex items-center gap-1 px-4 py-2 " +
                                                    "rounded-md text-white text-sm font-medium " +
                                                    `transition-colors ${link.color} ` +
                                                    "text-decoration-none"
                                                }
                                            >
                                                <Icon/>
                                                {link.name}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className={"border-t pt-4"}>
                                <CardTitle className={"flex items-center gap-2"}>
                                    <Send className={"h-4 w-4 text-teal-500"}/>
                                    {"Send us a message"}
                                </CardTitle>
                                <br/>
                                <p className={"text-muted-foreground text-sm mb-3"}>
                                    Have questions or want to schedule a demo? We&apos;d love to
                                    hear from you.
                                </p>
                                <Button
                                    asChild={true}
                                    variant={"outline"}
                                    className={
                                        "w-full bg-[var(--turquoise-600)] " +
                                        "hover:bg-[var(--turquoise-700)] " +
                                        "px-8 mobile-menu-btn transition-colors"
                                    }
                                >
                                    <a
                                        className={"text-decoration-none text-white"}
                                        href={"https://www.yscope.com/contact"}
                                        rel={"noopener noreferrer"}
                                        target={"_blank"}
                                    >
                                        Contact Us
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Newsletter */}
                    <Card className={"contact-card"}>
                        <CardHeader>
                            <CardTitle className={"flex items-center gap-2"}>
                                <Mail className={"h-5 w-5 text-blue-500"}/>
                                {"Subscribe to Our Newsletter"}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className={"text-muted-foreground text-sm mb-4"}>
                                {"Keep up with the latest CLP news, releases, and tips."}
                            </p>
                            <ZohoSignupForm/>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};
