# candidate-display



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type  | Default     |
| -------- | --------- | ----------- | ----- | ----------- |
| `data`   | `data`    |             | `any` | `undefined` |


## Dependencies

### Used by

 - [academic-candidate-display](../academic-candidates-display)
 - [elections-candidates](..)

### Depends on

- [profile-card](../../../cards/profile-card)
- [profile-card-layout](../../../containers/profile-card-layout)

### Graph
```mermaid
graph TD;
  candidate-display --> profile-card
  candidate-display --> profile-card-layout
  profile-card --> loading-spinner
  profile-card --> flex-container
  academic-candidate-display --> candidate-display
  elections-candidates --> candidate-display
  style candidate-display fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
