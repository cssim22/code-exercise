# Stable | Code Exercise

For this exercise, you'll implement a simple web application for users to view physical mail they've recently received at a Stable facility. Once the web application is complete, you'll deploy it for anyone with the public url to view.

This exercise should take 2 - 4 hours to complete. 

### Business Requirements
xx * The web application resembles the provided mock ups
* The web application is accessible from the public internet

### Technical Requirements
xx * Users can view the mock mail item data provided in the data.json file
xx * Users can view 6 mail items per page, with a maximum of 3 mail items per row
* Users can click through multiple pages when there are more than 6 mail items to display
xx * Users can easily interact with the web application in all screen sizes
xx * The codebase is pushed to a remote repository

### Resources
* Assets
	* [Stable Logo](https://s3-us-west-2.amazonaws.com/usestable.com-assets/logos/stable-logo.svg)
	* [Business Icon](https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/company.svg)
	* [Individual Icon](https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/recipient.svg)
	* [Scan Icon](https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/scan.svg)
	* [Shred Icon](https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/shred.svg)
	* [Forward Icon](https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/forward.svg)
	* [Processing Icon](https://s3-us-west-2.amazonaws.com/usestable.com-assets/icons/processing.svg)
* Colors
	* Primary: #3066BE;
	* Secondary: #606060;
	* Success: #85FFC7;
	* Danger: #E63946;
	* Light: #FAFCFF;
	* Dark: #080708;
* Fonts
	* [Noto Sans](https://fonts.google.com/specimen/Noto+Sans)
* [Mock ups](https://www.figma.com/file/gLBkzFfAl8DttHK0jvYTFK/Engineering-Exercise?node-id=0%3A1)

### Schema
##### Defined in GraphQL Schema Language
```
type MailItem {
	id: String!

	businessRecipient: String
	forward: ActionDetails
	from: String!
	imageUrl: String!
	individualRecipient: String
	scan: ActionDetails
	shred: ActionDetails
	timestamp: Number!
}


type ActionDetails {
	status: Status!
}

enum Status {
	completed
	processing
}
```

### Suggested Frameworks / Libraries
* React
* Reactstrap

### Submission Instructions
* Share the repository link and public url of the deployed application with your point of contact at Stable

Good luck!