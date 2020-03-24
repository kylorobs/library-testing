import { Component, h, Prop, State, Listen } from '@stencil/core';


@Component({
    tag: 'profile-tabs',
    styleUrl: 'profile-tabs.css',
    shadow: true
})
export class ProfileTabs {

    @Prop() headings:any = [['First Tab', 'Tab1', 'A maximum of two lines of text can go here. This is meant only as a brief introduction'], ['Second Tab', 'Tab2']];
    @Prop() activeid:string = 'Tab1';
    @Prop() database:string;

    @State() profiles:any;
    @State() activebio:any;
    @State() modalopen:boolean = false;

    componentDidLoad(){
        if(this.database){
            fetch(this.database)
                .then(res => res.json())
                .then(data => this.profiles = data)
        }
    }
    
    createTabs(){
        let headings = JSON.parse(this.headings)
        return headings.map((ar) => {
            let activeTab = ar[1] === this.activeid? true : false;
            let description = !ar[2]? '' : ar[2];
            return ([
                <tab-header name={ar[1]} active={activeTab} slot="tab-headers"> {ar[0]}</tab-header>,
                <tab-content name={ar[1]} active={activeTab} slot="tab-content"> 
                    <p>{description}</p>
                    <profile-card-layout>
                        {this.profiles? this.mapToCards(this.profiles, ar[1], ar[0]) : ''}
                    </profile-card-layout>
                </tab-content>
            ])
        })
    }

    mapToCards(data, filterId, category){
        let profiles = Object.keys(data).map(key => {
            let ob = data[key];
            ob.key = key;
            return ob
        });
        return profiles
            .filter(profile => profile.type === filterId)
            .map((profile) =>{ 
    
            return <profile-card 
                       name={profile.name}
                       position={category}
                       emitid={profile.key}
                       image={profile.url} 
                       cta='learn more'
                       secondcta = 'upcoming'
                       secondlink = {profile.upcomingEvent}
                   />
       })
    }

    launchBio(){
        return <full-bio data={!this.profiles? '' : this.profiles[this.activebio]}></full-bio>
    }


    @Listen('emitClick')
    onEmittedClick(event:CustomEvent){
        this.activebio = event.detail;
        this.modalopen = true;
    }

    @Listen('exitModal') closeModal(){
        this.modalopen= false;
    }


    render() {
        return ([
            <kclsu-modal show={this.modalopen}>
                {this.modalopen? this.launchBio(): ''}
            </kclsu-modal>,
            <tabs-container>
                {this.createTabs()}
            </tabs-container>
        ]);
    }
}