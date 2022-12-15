import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
	projectId: "46zg23yp",
	dataset: "production",
	apiVersion: "2022-12-15",
	useCdn: true,
	token:
		"skGOJk3Vb9WQO6DCrVif07xZ9vHwfJ0s3bFc8yAIq7rZ7n4lQRGZAO1eiZyjmPR2ioZXfE8hVlKs6eyIQRkQmXpdLVWtMMcuSOsae6t0IDzitCnZDfZdOb8kgTxSmcbqdkpBeaEUqOWIgVQh30kjGqBtMmlfI2tJ5WeDBXui5OIc2xSjG7cb",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
