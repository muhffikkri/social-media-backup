export default function updatePath(path) {
	return path.replace(/^public\\/, "").replace(/\\/g, "/");
}
