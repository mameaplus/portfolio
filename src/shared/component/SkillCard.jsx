function SkillCard({skill}) {
    return (
      <>
           <div className="item col-6 col-lg-3">
                <div className="item-inner">
                <div class="item-icon">{skill.icon}
                </div>
                    <h3 className="item-title">
                        {skill.title}
                    </h3>
                    <div className="item-desc">  
                          {skill.description} 
                    </div>
                </div>
        </div>
      </>
    );
  }
  export default SkillCard;
  