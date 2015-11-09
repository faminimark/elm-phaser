App.factory("GuideFactory", function(){
    var guides = [
        {
            id : 1,
            order: 1,
            'title' : 'Material design - Introduction',
            'body' : '<p class="md-body-1">To create a visual language for our users that synthesizes the classic principles of good design with the innovation and possibility of technology and science. This is material design. This spec is a living document that will be updated as we continue to develop the tenets and specifics of material design.</p>',
            'url': 'https://material-design.storage.googleapis.com/publish/material_v_4/material_ext_publish/0Bx4BSt6jniD7Y1huOXVQdlFPMmM/materialdesign_introduction.png'
        },
        {
            id : 2,
            order: 2,
            'title' : 'Goals',
            'body' : '<p class="md-body-1">Create a visual language that synthesizes classic principles of good design with the innovation and possibility of technology and science</p><p class="md-body-1">Develop a single underlying system that allows for a unified experience across platforms and device sizes. Mobile precepts are fundamental, but touch, voice, mouse, and keyboard are all ﬁrst-class input methods.</p>',
            'url': 'https://material-design.storage.googleapis.com/publish/material_v_4/material_ext_publish/0Bx4BSt6jniD7c0R4RUtiTkhMZTQ/materialdesign_goals_system.png'
        },
        {
            id : 3,
            order: 3,
            'title' : 'Principles',
            'body' : '<div layout="column" layout-sm="row"><div flex="30" flex-sm="100"><h3>Material is the metaphor</h3><p class="md-body-1">A material metaphor is the unifying theory of a rationalized space and a system of motion. The material is grounded in tactile reality, inspired by the study of paper and ink, yet technologically advanced and open to imagination and magic.</p><p class="md-body-1">Surfaces and edges of the material provide visual cues that are grounded in reality. The use of familiar tactile attributes helps users quickly understand affordances. Yet the flexibility of the material creates new affordances that supercede those in the physical world, without breaking the rules of physics</p><p class="md-body-1">The fundamentals of light, surface, and movement are key to conveying how objects move, interact, and exist in space and in relation to each other. Realistic lighting shows seams, divides space, and indicates moving parts.</p></div> </div>',
            'url': 'https://material-design.storage.googleapis.com/publish/material_v_4/material_ext_publish/0Bx4BSt6jniD7VG9DQVluOFJ4Tnc/materialdesign_principles_metaphor.png'
        },
        {
            id : 4,
            order: 3,
            'title' : '',
            'body' : '<div layout="column" layout-sm="row"><div flex="30" flex-sm="100"><h3>Bold, graphic, intentional</h3><p class="md-body-1">The foundational elements of print-based design—typography, grids, space, scale, color, and use of imagery—guide visual treatments. These elements do far more than please the eye. They create hierarchy, meaning, and focus. Deliberate color choices, edge-to-edge imagery, large-scale typography, and intentional white space create a bold and graphic interface that immerse the user in the experience.</p><p class="md-body-1">An emphasis on user actions makes core functionality immediately apparent and provides waypoints for the user.</p></div>',
            'url': 'https://material-design.storage.googleapis.com/publish/material_v_4/material_ext_publish/0Bx4BSt6jniD7NndTQW9VZTlZV2s/materialdesign_principles_bold.png'
        },
        {
            id : 5,
            order: 3,
            'title' : '',
            'body' : '<div layout="column" layout-sm="row"><div flex="30" flex-sm="100"><h3>Motion provides meaning</h3><p>Motion respects and reinforces the user as the prime mover. Primary user actions are inflection points that initiate motion, transforming the whole design.</p><p>All action takes place in a single environment. Objects are presented to the user without breaking the continuity of experience even as they transform and reorganize.</p><p>Motion is meaningful and appropriate, serving to focus attention and maintain continuity. Feedback is subtle yet clear. Transitions are efﬁcient yet coherent.</p></div>',
            'url': 'https://material-design.storage.googleapis.com/publish/material_v_4/material_ext_publish/0Bx4BSt6jniD7dkRYelJkeklqWFU/materialdesign_principles_motion.png'
        },
        {
            id : 6,
            order: 4,
            'title' : 'What is material?',
            'body' : '<div layout="column" layout-sm="row"><div flex="30" flex-sm="100"><h3>3D world</h3><p>The material environment is a 3D space, which means all objects have x, y, and z dimensions. The z-axis is perpendicularly aligned to the plane of the display, with the positive z-axis extending towards the viewer. Every sheet of material occupies a single position along the z-axis and has a standard 1dp thickness.<p/><p>On the web, the z-axis is used for layering and not for perspective. The 3D world is emulated by manipulating the y-axis.</p></div>',
            'url': 'https://material-design.storage.googleapis.com/publish/material_v_4/material_ext_publish/0Bx4BSt6jniD7UXpQYWltVjNPWXc/whatismaterial_environment_3d.png'
        },
         {
            id : 7,
            order: 4,
            'title' : '',
            'body' : '<div layout="column" layout-sm="row"><div flex="30" flex-sm="100"><h3>Light and shadow</h3><p>Within the material environment, virtual lights illuminate the scene. Key lights create directional shadows, while ambient light creates soft shadows from all angles.</p><p>Shadows in the material environment are cast by these two light sources. In Android development, shadows occur when light sources are blocked by sheets of material at various positions along the z-axis. On the web, shadows are depicted by manipulating the y-axis only. The following example shows the card with a height of 6dp.</p></div></div>',
            'url': '../assets/images/shadows.png'
        }
    ]
       return guides;
});