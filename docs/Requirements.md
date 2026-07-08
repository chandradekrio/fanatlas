Functional Requirements
R-001

The system shall allow an administrator to add a new fan profile.

R-002

The system shall store the following information for each fan:

Atlas ID
Name
City
Country
Date met
Story
Photo
Geographic location (captured automatically from the map)
R-003

The system shall display all fans on an interactive world map.

R-004

The map shall support:

Zoom
Pan
Mouse wheel zoom
Touch gestures
R-005

Clicking on the map shall create a temporary blue marker at the selected location.

R-006

The temporary marker may be repositioned before saving the fan profile.

R-007

Creating and editing a fan profile shall occur in a side panel without hiding the map.

R-008

Selecting a fan shall open the corresponding fan profile.

R-009

The system shall display fans in a searchable list.

R-010

The list shall support sorting by:

Name
Country
Date met
R-011

Every fan shall have a public URL.

Example:

fanatlas.com/citizen/Carlos-127

R-012

Fan profiles may be edited.

R-013

Fan profiles may be deleted.

Non-Functional Requirements
Simplicity

Adding a new fan should take less than two minutes.

Performance

The map shall remain responsive with thousands of fan profiles.

Privacy

Only information explicitly authorized by the fan shall be published.

Portability

The application shall run in any modern web browser without installation.

Cost

Blue Moon shall remain free to operate for small datasets.

Scalability

The architecture shall support multiple Atlases without redesign.

Out of Scope (Blue Moon)

The following features are intentionally excluded from the first release:

User accounts
Passwords
Social feeds
Likes
Comments
Private messaging
Notifications
Premium subscriptions
Multiple clubs
Multiple photos per fan
Video uploads
Audio uploads
