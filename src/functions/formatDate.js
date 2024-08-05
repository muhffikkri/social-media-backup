export default function formatDate(dateString) {
	const now = new Date();
	const past = new Date(dateString);
	const diffInSeconds = Math.floor((now - past) / 1000);
	const intervals = {
		year: 365 * 24 * 60 * 60,
		month: 30 * 24 * 60 * 60,
		week: 7 * 24 * 60 * 60,
		day: 24 * 60 * 60,
		hour: 60 * 60,
		minute: 60,
		second: 1,
	};

	for (const [key, seconds] of Object.entries(intervals)) {
		const count = Math.floor(diffInSeconds / seconds);
		if (count >= 1) {
			return `${count} ${key}${count > 1 ? "s" : ""} ago`;
		}
	}

	return "Just now";
}
