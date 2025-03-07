import { peerConnection } from "@janus-videoroom-client/peer-connection";
import { janusVideoRoom } from "@janus-videoroom-client/janus-video-room";

export default function App() {
	return (
		<div>
			<h1>Hello, World!</h1>
			<br />
			<span>{janusVideoRoom}</span> | <span>{peerConnection}</span>
		</div>
	);
}
