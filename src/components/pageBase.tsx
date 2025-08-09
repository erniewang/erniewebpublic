import { phoneMode } from "../App";
import { useContext } from "react";

export default function PageBase() {
    const pM = useContext(phoneMode);
    const headerHeight = 65; // px

    return (
        <div
            className={`w-screen h-full bg-black overflow-y-scroll text-white`}
            style={{
                paddingTop: !pM ? `${headerHeight}px` : 0,
                paddingBottom: pM ? `${headerHeight}px` : 0
            }}
        >
            Hello everyone. It’s been a wild past few days, but I hope there is finally light at the end of the tunnel. For anyone who has missed what’s been happening, let’s get everyone up to speed.

Back in July of this year, I was contacted by someone who was looking for help after coming across previous videos I’d made about Alex years ago. This person, who I will refer to as “Jane”, is a 16-year-old girl and Yandere Simulator fan who claimed she was actively being groomed and sexually abused throughout this summer by YandereDev/Alex over the internet. These allegations substantiated by evidence include a variety of inappropriate behavior such as asking her to dress up and model certain outfits for him, wanting “lewd pictures and videos to fap to” and that he’d keep it a secret if she sent that content, discussing his penis size, and more.

Much of this relationship took place over SnapChat, with Alex demanding the chat settings be set to delete messages upon viewing hoping it would prevent him getting caught. As his behavior became continuously more inappropriate, Jane realized she was being groomed and taken advantage of and began recording her SnapChat conversations with Alex and the voice calls they participated in over Discord as she was able to, which to the best of my knowledge are considered legal recordings as both of their states have exemptions to the two-party consent law in the case of recording to gather evidence of a felony crime. She reached out to me to assist in getting her story and the evidence public, as she would like to remain as anonymous as possible, and to expose Alex’s misconduct.

Unfortunately, as I’m sure many people are aware by now, Jane has recently retracted her statements and has even spoken publicly to try to diminish the abuse and portray Alex as someone who isn’t a predator, just “lonely”. To be clear, I do not blame Jane at all for any of this and ask that everyone do the same – this is precisely what grooming does, in order to convince victims that this behavior is ok when it is absolutely not. The blame does and always will lie fully with Alex. As of now according to her own statements, Alex has still been in recent contact with her and I feel he is continuing to manipulate her behind-the-scenes. Some of the last pieces of evidence I received from Jane show Alex gaslighting and guilt-tripping her into retracting her allegations, and even asking her to publicly lie on his behalf.

I’m sure we can all agree that a victim’s consent is essential when sharing their story, and if she had revoked under any other circumstances I would’ve respected her choice and scrapped the video. However, it seems apparent that she was coerced into this decision by her alleged abuser and her infatuation with him exploited for his benefit, with contact supposedly still being maintained between them even now. And with other alleged victims coming forward over the past few months, many have been begging for the evidence to still be shared in order to stop potential future abuse of more young girls. We've seen a lot of comments about how this situation has become bigger than just one person, especially with news of these accusations and pieces of evidence making its way to the public prior to the video’s release on Jane’s request, and we completely agree. With everything in mind, while discussing with Jane’s friend, the alleged victims, and others involved, it was a unanimous decision to move forward. We fully understand and respect the viewpoint of some who will strongly disagree with this, and we hope everyone will likewise understand and respect that under these circumstances, we truly feel we are making the best decision we can for all involved.

I’m aware that Jane has posted to both here and the main subreddit and by her own actions parts of her identity and online profiles have been made public, however I ask that everyone please continue to treat her with as much anonymity as possible. She is still a victim, and she is still a child, and nothing will change either of those facts.

Here is the video: https://youtu.be/XyOSBp3arDo

Thank you to the mods for allowing me to post this here, and thank you to the subreddit as a whole for all the work everyone has done over the years to document and archive Alex’s wrongdoings, which was vital to the original project in order to show a full representation of his character, even though it couldn’t be posted in the end.

For legal reasons, all accusations are alleged and restated on behalf of the alleged victim, statements made are my own opinion, and I do not encourage harassment towards anyone. I encourage everyone to examine the evidence and come to their own conclusions.

EDIT: The video was taken down by a copyright strike in the victim's name, though not actually done by her. It is now back up at the victim's request, and she has cut ties with Alex. https://imgur.com/a/l4qYDC9

See Jane’s statement here: https://www.tiktok.com/@decepticommie/video/7284743183056129322?is_from_webapp=1&sender_device=pc&web_id=6994510462717380102

Jane has now publicly stated, both in the above TikTok and posts made from her own accounts, that any defense of Alex and diminishing of the abuse he inflicted she had done out of guilt and fear because as mentioned in the video he had threatened her with legal action. She has also said the Reddit post was made by Alex, and the copyright strike previously taken against this video was filed by Cameron, Alex’s PA — none of it was done by her. She had been secretly supportive of the video being posted and everything that we’ve been doing but was unable to say so publicly due to manipulation and threats from Alex. As I speculated in the video and has now been confirmed, her request to stop the video came not from her, but from the man who was still actively grooming her at the time.

That is another reason why the video was posted though it could not be expressed at the time, was not only to expose what Alex had already done but to shine a spotlight on him in the present to get him to leave her alone and stop his manipulation tactics, as they had maintained contact both before and for a short while after this video was released. But now fortunately as of now she has cut contact with him. Now that she is no longer retracting her allegations and shared even more damning information and accusations against Alex, police have been made aware of this situation and wherever it goes from here is up to Jane if she chooses to pursue anything further. Understandably, as is common in many grooming cases, there’s a lot of mixed feelings involved even though she acknowledges what he did is wrong. At the same time she idolized Alex throughout much of her childhood and had become infatuated with him, and that’s not an easy mindset to break out of. She’s dealing with this situation and processing through it as best she can, and we will continue to help and support her however she needs.
        </div>
    );
}
